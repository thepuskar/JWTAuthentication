import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorMessage } from '../../interface';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors(): ErrorMessage[] {
    return this.errors.map((error: ValidationError) => {
      return { message: error.msg, field: error.param };
    });
  }
}
