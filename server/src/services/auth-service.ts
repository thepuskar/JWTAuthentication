import { PrismaClient, User } from '@prisma/client';
import { IUser } from '../interface';

import {
  BadRequestError,
  PasswordHash,
  PasswordCompare,
  TokenGenerator,
  sendMail,
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

  const user = await prisma.user.create({
    data: { name, email, password: await PasswordHash(password) },
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
  const token = TokenGenerator(existingUser.id, existingUser.email);

  const link = `${process.env.BASE_URL}/forgot-password-reset/${token}/${existingUser.id}`;
  await sendMail(existingUser.email, 'Password Reset', link);
  return { message: 'Password reset email sent successfully' };
};
