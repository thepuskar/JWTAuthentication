import { PrismaClient, User } from '@prisma/client';

import {
  BadRequestError,
  PasswordHash,
  PasswordCompare,
  TokenGenerator,
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
