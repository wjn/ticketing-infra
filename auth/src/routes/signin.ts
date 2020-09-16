import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi there, from the signin router!');
});

export { router as signinRouter };
