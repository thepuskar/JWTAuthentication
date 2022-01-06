import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const TokenGenerator = (id: string, email: string) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY!);
};

export const genAccountActivationToken = () => {
  const randomBytes = crypto.randomBytes(32).toString('hex');
  return crypto.createHash('sha256').update(randomBytes).digest('hex');
};
export const genPasswordResetToken = () => {
  const token = genAccountActivationToken();
  const tokenExpiration = Date.now() + 10 * 60 * 1000;
  return { token, tokenExpiration };
};
