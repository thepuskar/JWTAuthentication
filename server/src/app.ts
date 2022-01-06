import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandlerMiddleware } from './middlewares';
import { NotFoundError } from './utils';
import routes from './routes';
import { join } from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

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
