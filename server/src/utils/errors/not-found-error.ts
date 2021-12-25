import { CustomError } from './custom-error';
import { ErrorMessage } from '../../interface';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor() {
    super('Route Not Found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): ErrorMessage[] {
    return [{ message: '404 Not Found' }];
  }
}
