import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import moment from 'moment';

export const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/teste', ((req, res) => {
  res.status(200).send({ res: 'Sucesso' });
}));

// error handler
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500);
  res.json({
    err,
  });
});

