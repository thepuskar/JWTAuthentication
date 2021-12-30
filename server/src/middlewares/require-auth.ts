import { RequestHandler } from 'express';
import { NotAuthorizedError } from '../utils';

export const requireAuth: RequestHandler = async (req, _res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
