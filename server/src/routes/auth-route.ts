import express from 'express';

import { validationRequestMiddleware } from '../middlewares';
import { authValidator } from '../validators';

import { register, login, logout } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authValidator, validationRequestMiddleware, register);

router.post('/login', authValidator, validationRequestMiddleware, login);

router.post('/logout', logout);

export default router;
