import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

import { BadRequestError, PasswordHash, PasswordCompare } from '../utils';

const prisma = new PrismaClient();

export const UserRegister = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new BadRequestError('Email already in use');
  }
  const hashPassword = await PasswordHash(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashPassword },
  });

  const userJwt = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY!,
  );

  res.session = {
    jwt: userJwt,
  };

  return user;
};

export const UserLogin = async (req: any, res: any) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) throw new BadRequestError('Invalid credentials');

  const valid = await PasswordCompare(existingUser.password, password);

  if (!valid) throw new BadRequestError('Invalid credentials');

  const userJwt = jwt.sign(
    { id: existingUser.id, email: existingUser.email },
    process.env.JWT_KEY!,
  );

  res.session = {
    jwt: userJwt,
  };

  const { password: userPassword, ...user } = existingUser;

  return user;
};
