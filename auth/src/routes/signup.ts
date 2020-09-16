import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

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
      return res.status(400).send(errors.array());
    }

    console.log('Creating a user');
    res.status(200).send({});
  }
);

export { router as signupRouter };
