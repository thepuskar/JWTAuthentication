import { RequestHandler } from 'express';
import { UserRegister, UserLogin, UserLogOut } from '../services';

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

export const logout: RequestHandler = async (req, res) => {
  const user = await UserLogOut(req);
  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
    user: user,
  });
};
