export class DataBaseConnectionError extends Error {
  reason = 'Error connecting to database';
  constructor() {
    super();

    // when trying to extending a built in class we have to do this:
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }
}
