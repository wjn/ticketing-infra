import { CustomError } from './custom-error';

export class DataBaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super('Error connecting to Database');

    // when trying to extending a built in class we have to do this:
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
