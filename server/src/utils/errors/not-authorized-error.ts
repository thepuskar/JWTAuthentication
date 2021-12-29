import { CustomError } from './custom-error';
import { ErrorMessage } from '../../interface';

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): ErrorMessage[] {
    return [{ message: 'Not Authorized' }];
  }
}
