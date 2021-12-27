import { RequestHandler } from 'express';
import { UserRegister, UserLogin } from '../services';

export const register: RequestHandler = async (req, res) => {
  const user = await UserRegister(req, res);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user,
  });
};

export const login: RequestHandler = async (req, res) => {
  const user = await UserLogin(req, res);

  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    user: user,
  });
};
