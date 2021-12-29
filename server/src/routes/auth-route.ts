import express from 'express';

import { validationRequestMiddleware } from '../middlewares';
import { authValidator } from '../validators';

import {
  register,
  login,
  logout,
  currentUser,
} from '../controllers/auth.controller';
import { currentUserMiddleware } from '../middlewares/current-user-middleware';

const router = express.Router();

router.post('/register', authValidator, validationRequestMiddleware, register);

router.post('/login', authValidator, validationRequestMiddleware, login);

router.post('/logout', logout);

router.get('/current-user', currentUserMiddleware, currentUser);

export default router;
