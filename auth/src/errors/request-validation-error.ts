import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // when trying to extending a built in class we have to do this:
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
