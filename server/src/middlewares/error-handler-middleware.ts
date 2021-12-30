import { Response, Request, NextFunction } from 'express';
import { CustomError } from '../utils';

export const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
    return;
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
