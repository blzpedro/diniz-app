import * as admin from 'firebase-admin';
import * as moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

admin.initializeApp();

import { app } from './express';

app.listen(3000, () => {
  console.log(`Local app executing at http://localhost:3000`);
});
