import { Request, Response, NextFunction } from 'express';
import { DataBaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

// Create a consistent error response for all services.
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  /**
   * could we refacotor to a switch statement in some elegant way?
 
      switch(err.constructor.name) {
        case  'RequestValidationError': 
        break;
      }
   */

  if (err instanceof RequestValidationError) {
    const formattedErrors = '';

    console.error('[ERROR] ', 'request validation error');
    console.error(RequestValidationError);
  }
  if (err instanceof DataBaseConnectionError) {
    console.error('[ERROR] ', 'database connection error');
  }

  res.status(400).send({ message: err.message });
};
