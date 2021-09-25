import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { switchMap, } from 'rxjs/operators';
import { UserService } from './user.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUser: any
  uid: any
  jwt = new JwtHelperService();

  constructor(private firebaseAuth: AngularFireAuth, private userService: UserService) {
    this.authenticatedUser = this.firebaseAuth.authState.pipe(
      switchMap(async user => {
        if (user) {
          this.uid = user.uid
          return await this.userService.getUserById(user.uid)
        }

        return of(null);
      }),
    )
  }

  decodeAccessToken(accessToken: string) {
    return this.jwt.decodeToken(accessToken)
  }

}
