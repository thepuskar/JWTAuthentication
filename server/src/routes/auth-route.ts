import express from 'express';

import { validationRequestMiddleware } from '../middlewares';
import { authValidator } from '../validators';

import { register } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authValidator, validationRequestMiddleware, register);

export default router;
