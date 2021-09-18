import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { switchMap, } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUser: any
  uid: any

  constructor(private firebaseAuth: AngularFireAuth, private userService: UserService) {
    this.authenticatedUser = this.firebaseAuth.authState.pipe(
      switchMap(async user => {
        if (user) {
          this.uid = user.uid
          return await this.userService.getUserById$(user.uid)
        }

        return of(null);
      }),
    )
  }

}
