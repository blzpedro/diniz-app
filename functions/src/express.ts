import express from 'express';
import * as admin from 'firebase-admin';
import * as moment from 'moment';

const https = require('https');

export const app = express();
app.use(express.json());

app.get('/teste', ((req, res) => {
  res.status(200).send('teste retorno teste');
}));

// error handler
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500);
  res.json({
    err,
  });
});

