import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  console.log('Hi there');
});

app.listen(3000, () => {
  console.log('Auth app (0.0.1) listening on port 3000.');
});
