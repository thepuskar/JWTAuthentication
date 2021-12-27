import { RequestHandler } from 'express';
import { UserRegister } from '../services';

export const register: RequestHandler = async (req, res) => {
  const user = await UserRegister(req, res);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user,
  });
};
