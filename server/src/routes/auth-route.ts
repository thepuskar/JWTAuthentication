import express from 'express';

import { asyncHandler, validationRequestMiddleware } from '../middlewares';
import { authValidator } from '../validators';

import {
  register,
  login,
  logout,
  currentUser,
} from '../controllers/auth.controller';
import { currentUserMiddleware } from '../middlewares/current-user-middleware';

const router = express.Router();

router.post(
  '/register',
  authValidator,
  validationRequestMiddleware,
  asyncHandler(register),
);

router.post(
  '/login',
  authValidator,
  validationRequestMiddleware,
  asyncHandler(login),
);

router.post('/logout', asyncHandler(logout));

router.get('/current-user', currentUserMiddleware, asyncHandler(currentUser));

export default router;
