import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

type TokenType = Pick<User, 'id' | 'email'>;

export const TokenGenerator = ({ id, email }: TokenType) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY!, { algorithm: 'RS256' });
};
