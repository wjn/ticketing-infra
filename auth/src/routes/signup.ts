import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DataBaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const router = express.Router();

console.log('signup route loading');

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 24 })
      .withMessage('Password must be between 4 and 24 characters in length.'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    console.log('Creating a user');
    throw new DataBaseConnectionError();

    res.status(200).send({});
  }
);

export { router as signupRouter };
