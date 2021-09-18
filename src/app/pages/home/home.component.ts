import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.interface';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsClass } from 'src/app/shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  signIn = false
  user: any
  userWithToken: User
  accessToken: string

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private userService: UserService,
    private utils: UtilsClass) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
      'phone': new FormControl(null)
    })
  }

  async onSubmit() {
    let { email, password, phone } = this.loginForm.value
    let admin = true
    try {
      if (this.signIn) {
        this.user = await this.firebaseService.signIn(email, password).then(res => this.user = res.user)
      } else {
        await this.signUpUser(email, password, phone, admin)
      }
      this.success()
    } catch (e) {
      this.error(e.message)
      console.log(e)
    }
  }

  async signUpUser(email, password, phone, admin) {
    this.user = await this.firebaseService.signUp(email, password).then(res => this.user = res.user)
    this.user = { ...this.user, password, phone, admin }

    this.userWithToken = await this.userService.generateAccessToken(this.user).pipe(first()).toPromise()

    await this.userService.addUser(this.userWithToken)
    this.signUpSuccess()
  }

  success() {
    localStorage.setItem('accessToken', this.userWithToken.accessToken)
    this.router.navigate(['/calendar'])
  }

  error(message: string) {
    this.utils.openSnackBar(message, 'error')
  }

  signUpSuccess() {
    this.utils.openSnackBar('Conta criada com sucesso.', 'success')
  }

}
