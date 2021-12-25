import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env',
});

import { app } from './app';

const start = async () => {
  console.log('Auth is starting up...');

  app.listen(process.env.PORT, () => {
    console.log('Auth is listening on port:', process.env.PORT);
  });
};

start();
