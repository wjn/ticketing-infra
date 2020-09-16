import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signupRouter } from './routes/signup';
// import { signinRouter } from './routes/signin';
// import { signoutRouter } from './routes/signout';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
// app.use(signinRouter);
// app.use(signoutRouter);

app.listen(3000, () => {
  console.log('>>>>> Auth app (0.0.1) listening on port 3000.');
});
