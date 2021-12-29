import jwt from 'jsonwebtoken';

export const TokenGenerator = (id: string, email: string) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY!);
};
