import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { NotAuthorizedError } from '../utils';

interface IUSer {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUSer;
    }
  }
}

export const currentUserMiddleware: RequestHandler = async (
  req,
  _res,
  next,
) => {
  let token: String;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new NotAuthorizedError());
  }
  try {
    const payload = jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.JWT_KEY!,
    ) as IUSer;
    req.currentUser = payload;
  } catch (error) {
    console.log('error', error);
  }
  next();
};
