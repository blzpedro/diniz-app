import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import moment from 'moment';
import { generateAccessToken } from './access-token';


export const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/teste', ((req, res) => {
  res.status(200).send({ res: req.query });
}));

app.post('/generateAccessToken', ((req, res) => {
  let token = generateAccessToken(req.body)
  res.status(200).send({ ...req.body, accessToken: token });
}));

// error handler
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500);
  res.json({
    err,
  });
});
