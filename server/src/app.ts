import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandlerMiddleware } from './middlewares';
import { NotFoundError } from './utils';

const app = express();

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);

app.all('*', async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app };
