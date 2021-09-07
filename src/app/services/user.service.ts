import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore) { }

  addUser(user: User): any {
    let id = this.firestore.createId();
    return this.firestore.collection('users').doc(id).set({ email: user.email, uid: user.uid, password: user.password, phone: user.phone, admin: user.admin });
  }

  async getUserById$(userId: string): Promise<any> {
    return this.firestore.collection('users').doc(userId).valueChanges().pipe(
      map(res => res),
    )
  }
}
