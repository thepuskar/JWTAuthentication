import express from 'express';

import {
  asyncHandler,
  validationRequestMiddleware,
  requireAuth,
  currentUserMiddleware,
} from '../middlewares';
import {
  authRegisterValidator,
  authLoginValidator,
  authResetPasswordValidator,
  verifyEmailValidator,
  forgotPasswordResetPasswordValidator,
} from '../validators';

import {
  register,
  login,
  logout,
  currentUser,
  passwordReset,
  fotgotPassword,
  resetForgotPassword,
  emailVerification,
} from '../controllers/auth.controller';

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
  validationRequestMiddleware,
  currentUserMiddleware,
  requireAuth,
  asyncHandler(passwordReset),
);

router.post('/fotgot-password', asyncHandler(fotgotPassword));

router.post(
  '/fotgot-password-reset',
  forgotPasswordResetPasswordValidator,
  validationRequestMiddleware,
  asyncHandler(resetForgotPassword),
);

router.post(
  '/confirm-email',
  verifyEmailValidator,
  validationRequestMiddleware,
  asyncHandler(emailVerification),
);

export default router;
