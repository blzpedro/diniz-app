import * as admin from 'firebase-admin';
import * as moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

admin.initializeApp({
  credential: admin.credential.cert('src/diniz-barber-firebase-adminsdk.json'),
  databaseURL: "https://diniz-barber-default-rtdb.firebaseio.com"
});

import { app } from './express';

app.listen(3000, () => {
  console.log(`Local app executing at http://localhost:3000`);
});
