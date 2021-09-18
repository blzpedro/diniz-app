import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore, private http: HttpService) { }

  addUser(user: User): any {
    return this.firestore.collection('users').doc(user.uid).set({ email: user.email, uid: user.uid, password: user.password, phone: user.phone, admin: user.admin, accessToken: user.accessToken });
  }

  async getUserById$(userId: string): Promise<User | {}> {
    let user = await this.firestore.collection('users').doc(userId).ref.get().then(user => user.data()).catch(error => error);
    return user
  }

  generateAccessToken({ email, password, phone, admin, uid }): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/generateAccessToken`, { email, password, phone, admin, uid });
  }
}
