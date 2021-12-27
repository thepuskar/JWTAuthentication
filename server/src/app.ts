import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandlerMiddleware } from './middlewares';
import { NotFoundError } from './utils';
import routes from './routes';

const app = express();

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);

app.use(
  '/api/',
  async (_req: Request, _res: Response, next: NextFunction) => {
    next();
  },
  routes,
);

app.all('*', async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app };
