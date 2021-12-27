import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

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

export const currentUserMiddleware: RequestHandler = async (req, res, next) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as IUSer;
    req.currentUser = payload;
  } catch (error) {
    console.log(error);
  }
  next();
};
