import { RequestHandler } from 'express';
import {
  UserRegister,
  UserLogin,
  PasswordReset,
  ForgotPassword,
  verifyEmail,
  ResetForgotPassword,
} from '../services';

export const register: RequestHandler = async (req, res) => {
  const { user, token } = await UserRegister(req.body);

  req.session.Session = {
    jwt: token,
  };

  res.status(201).json({
    success: true,
    message: 'User created successfully and activation token was sent to email',
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
  req.session.Session = null;
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

export const passwordReset: RequestHandler = async (req, res) => {
  const user = await PasswordReset(req.body);

  res.status(200).json({
    success: true,
    message: 'Password reset successfully',
    user,
  });
};

export const fotgotPassword: RequestHandler = async (req, res) => {
  const email = await ForgotPassword(req.body);

  res.status(200).json({
    success: true,
    message: `Password reset token email send to your email: ${email}`,
  });
};

export const resetForgotPassword: RequestHandler = async (req, res) => {
  await ResetForgotPassword(req.body);

  res.status(200).json({
    success: true,
    message: 'Password reset successfully',
  });
};

export const emailVerification: RequestHandler = async (req, res) => {
  const { message } = await verifyEmail(req.body);

  res.status(200).json({
    success: true,
    message,
  });
};
