import { CustomError } from './custome-error';
import { ErrorMessage } from '../../interface';

export class BadRequestError extends CustomError {
  statusCode: number = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): ErrorMessage[] {
    return [{ message: this.message }];
  }
}
