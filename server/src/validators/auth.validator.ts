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

const splitText = (text: string) => {
  const str = text.replace(/([A-Z])/g, ' $1');
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const tokenValidator = (token: string) =>
  body(token)
    .notEmpty()
    .withMessage(`${splitText(token)} is required`);

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

export const verifyEmailValidator = [
  emailValidator,
  tokenValidator('activationToken'),
];
