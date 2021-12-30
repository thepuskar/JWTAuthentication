import express from 'express';

import {
  asyncHandler,
  validationRequestMiddleware,
  requireAuth,
} from '../middlewares';
import {
  authRegisterValidator,
  authLoginValidator,
  authResetPasswordValidator,
} from '../validators';

import {
  register,
  login,
  logout,
  currentUser,
  passwordReset,
  fotgotPassword,
} from '../controllers/auth.controller';
import { currentUserMiddleware } from '../middlewares/current-user-middleware';

const router = express.Router();

router.post(
  '/register',
  authRegisterValidator,
  validationRequestMiddleware,
  asyncHandler(register),
);

router.post(
  '/login',
  authLoginValidator,
  validationRequestMiddleware,
  asyncHandler(login),
);

router.post('/logout', asyncHandler(logout));

router.get('/current-user', currentUserMiddleware, asyncHandler(currentUser));

router.post(
  '/reset-password',
  authResetPasswordValidator,
  currentUserMiddleware,
  requireAuth,
  asyncHandler(passwordReset),
);

router.post('/fotgot-password', asyncHandler(fotgotPassword));

export default router;
