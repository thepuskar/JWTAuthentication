import { PrismaClient, User } from '@prisma/client';
import { IUser } from '../interface';

import {
  BadRequestError,
  PasswordHash,
  PasswordCompare,
  TokenGenerator,
  sendMail,
  genPasswordResetToken,
  genAccountActivationToken,
} from '../utils';

const prisma = new PrismaClient();

type RegisterUserType = Pick<User, 'name' | 'email' | 'password'>;

export const UserRegister = async ({
  name,
  email,
  password,
}: RegisterUserType) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new BadRequestError('Email already in use');
  }

  const activationToken = genAccountActivationToken();

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await PasswordHash(password),
      activationToken,
    },
  });

  await sendMail({
    user,
    url: `${process.env.BASE_URL}/confirm-email?email=${email}&token=${activationToken}`,
    template: 'signupEmail.ejs',
    email: user.email,
    subject: 'Welcome to hyper auth! Confirm your email',
  });

  const token = TokenGenerator(user.id, user.email);
  return { user, token };
};

type LoginUserType = Pick<User, 'email' | 'password'>;

export const UserLogin = async ({ email, password }: LoginUserType) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) throw new BadRequestError('Invalid credentials');

  const valid = await PasswordCompare(existingUser.password, password);

  if (!valid) throw new BadRequestError('Invalid credentials');

  const token = TokenGenerator(existingUser.id, existingUser.email);

  const { password: userPassword, ...user } = existingUser;

  return { user, token };
};

export const PasswordReset = async ({
  email,
  password,
  newPassword,
}: IUser) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) {
    throw new BadRequestError('User Does Not Exist');
  }
  const valid = await PasswordCompare(existingUser.password, password);

  if (!valid) throw new BadRequestError('Invalid credentials');

  if (password === newPassword)
    throw new BadRequestError(
      'New Password should not be same as old password',
    );

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: await PasswordHash(newPassword) },
  });
  return existingUser;
};

export const ForgotPassword = async ({ email }: IUser) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) {
    throw new BadRequestError('User Does Not Exist');
  }
  const { token, tokenExpiration } = genPasswordResetToken();

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      passwordResetToken: token,
      passwordResetExpires: tokenExpiration,
    },
  });

  const link = `${process.env.BASE_URL}/forgot-password-reset/${token}`;

  await sendMail({
    email,
    subject: 'Forgot Password reset token!! (will expire in 20 minutes)',
    template: 'forgotPassword.ejs',
    url: link,
    user: existingUser,
  });

  return existingUser.email;
};

type ForgotPasswordResetType = Pick<
  User,
  'email' | 'password' | 'passwordResetToken'
>;

export const ResetForgotPassword = async ({
  email,
  password,
  passwordResetToken,
}: ForgotPasswordResetType) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser.passwordResetExpires > Date.now()) {
    throw new BadRequestError('Token has expired');
  }
  if (!existingUser) {
    throw new BadRequestError('User Does Not Exist');
  }
  if (existingUser.passwordResetToken !== passwordResetToken)
    throw new BadRequestError('Invalid token');

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      password: await PasswordHash(password),
      passwordResetToken: null,
      passwordResetExpires: null,
    },
  });

  await sendMail({
    email,
    date: new Date(),
    subject: 'Password reset Successful.',
    template: 'resetPassword.ejs',
    user: existingUser,
  });

  return existingUser;
};

type EmailVerifyType = Pick<User, 'email' | 'activationToken'>;

export const verifyEmail = async ({
  email,
  activationToken,
}: EmailVerifyType) => {
  console.log(email, activationToken);
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) {
    throw new BadRequestError('User Does Not Exist');
  }
  if (existingUser.activationToken !== activationToken) {
    throw new BadRequestError('Invalid token');
  }
  await prisma.user.update({
    where: { id: existingUser?.id },
    data: {
      activated: true,
      activationToken: null,
    },
  });
  return { message: 'Email verified successfully' };
};
