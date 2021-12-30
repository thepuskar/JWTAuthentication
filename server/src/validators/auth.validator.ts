import { body } from 'express-validator';

const nameValidator = body('name').notEmpty().withMessage('Name is required');

const emailValidator = body('email')
  .isEmail()
  .withMessage('Email must be valid');

const passwordValidator = (password: string) =>
  body(password)
    .trim()
    .isLength({ min: 4 })
    .withMessage('Password must be enter');

export const authRegisterValidator = [
  nameValidator,
  emailValidator,
  passwordValidator('password'),
];

export const authLoginValidator = [
  emailValidator,
  passwordValidator('password'),
];

export const authResetPasswordValidator = [
  emailValidator,
  passwordValidator('password'),
  passwordValidator('newPassword'),
];
