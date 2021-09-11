import * as admin from 'firebase-admin';
admin.initializeApp();

import * as functions from 'firebase-functions';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { app } from './express';

moment.locale('pt-br');

export const expressApi = functions.runWith({
  memory: '2GB',
  timeoutSeconds: 540,
}).https.onRequest(app);
