import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';

import { errorHandlerMiddleware } from './middlewares';
import { NotFoundError } from './utils';
import routes from './routes';
import { join } from 'path';

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(json());

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
