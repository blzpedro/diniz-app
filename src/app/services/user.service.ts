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

  // SS2R8vmWTvgzGNM8GJ4KosPWfyI3
  // const snapshot = await this.firestore.collection('users').get()
  addUser(user: any): any {
    let id = this.firestore.createId();
    return this.firestore.collection('users').doc(id).set({ email: user.email, uid: user.uid, password: user.password });
  }

  async getUserById$(userId: string): Promise<any> {
    return this.firestore.collection('users').doc(userId).valueChanges().pipe(
      map(res => res),
    )
  }
}
