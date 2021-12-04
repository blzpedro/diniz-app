import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import moment from 'moment';
import { generateAccessToken } from './access-token';
import { decodeJWT } from './access-token';
import { db } from './db';
import { v4 as uuidv4 } from 'uuid';

const schedulesCollection = 'schedules';
const subSchedulesCollection = 'subSchedules';

export const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/teste', (req: any, res) => {
  res.status(200).send({ data: 'Sucesso' });
});

app.post('/generateAccessToken', ((req, res) => {
  let token = generateAccessToken(req.body)
  res.status(200).send({ ...req.body, accessToken: token });
}));

app.post('/createScheduleHour', decodeJWT, async (req: any, res) => {
  const user = req.user;
  if (!user.admin) {
    res.status(401).send({ error: 'Usuário não autorizado.' });
  } else {
    // validar se horário ja não existe
    const { date, hour } = req.body;
    const schedule = {
      date, hour, id: uuidv4()
    }
    const docId = date.split('/').join('-');
    const doc = await db.collection(schedulesCollection).doc(docId).collection(subSchedulesCollection).doc().create(schedule);
    res.status(200).send({ data: 'Horário criado com sucesso.', doc });
  }
});

app.get('/getSchedulesByDate', decodeJWT, async (req: any, res) => {
  const user = req.user;
  if (!user.admin) {
    res.status(401).send({ error: 'Usuário não autorizado.' });
  } else {
    const { date } = req.query;
    let doc = await db.collection(schedulesCollection).doc(date.split('/').join('-')).collection(subSchedulesCollection).get().then(d => d.docs.map(d => d.data()));
    res.status(200).send({ data: doc });
  }
});

app.delete('/deleteScheduleHour', decodeJWT, async (req: any, res) => {
  const user = req.user;
  if (!user.admin) {
    res.status(401).send({ error: 'Usuário não autorizado.' });
  } else {
    const { date, id } = req.query;
    let doc = await db.collection(schedulesCollection).doc(date.split('/').join('-')).collection(subSchedulesCollection).get().then(d => d.docs.map(d => d.data().id === id ? d.ref.delete() : null));
    doc.some(d => d != null) ?
      res.status(200).send({ data: 'Horário deletado com sucesso.' }) : res.status(404).send({ error: 'Horário não encontrado.' });
  }
});

// error handler
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500);
  res.json({
    err,
  });
});
