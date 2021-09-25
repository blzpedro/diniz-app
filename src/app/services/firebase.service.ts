import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }

  signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('accessToken')
    this.router.navigate(['/'])
  }
}
