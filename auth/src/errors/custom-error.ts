export abstract class CustomError extends Error {
  // abstract modifier identifies properties that are required
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    // when trying to extending a built in class we have to do this:
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
