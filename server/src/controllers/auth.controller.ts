import { RequestHandler } from 'express';
import { UserRegister, UserLogin } from '../services';

export const register: RequestHandler = async (req, res) => {
  const { user, token } = await UserRegister(req.body);

  req.session.Session = {
    jwt: token,
  };

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user,
    token,
  });
};

export const login: RequestHandler = async (req, res) => {
  const { user, token } = await UserLogin(req.body);

  req.session.Session = {
    jwt: token,
  };

  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    user,
    token,
  });
};

export const logout: RequestHandler = async (req, res) => {
  req.session = null;
  const user = {};

  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
    user: user,
  });
};

export const currentUser: RequestHandler = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Current user',
    user: req?.currentUser,
  });
};
