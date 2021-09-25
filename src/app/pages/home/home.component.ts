import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsClass } from 'src/app/shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  signIn = true
  user: any
  userWithToken: User
  accessToken: string

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private userService: UserService,
    private utils: UtilsClass,
    private loader: LoaderService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl("pedro@pedro.com"),
      'password': new FormControl("pedro123"),
      'phone': new FormControl(null)
    })
  }

  async onSubmit() {
    let { email, password, phone } = this.loginForm.value
    let admin = true
    this.loader.show()
    try {
      if (this.signIn) {
        let userId = await this.firebaseService.signIn(email, password).then(res => res.user.uid)
        this.userWithToken = await this.userService.getUserById(userId)
      } else {
        await this.signUpUser(email, password, phone, admin)
      }
      this.success()
    } catch (e) {
      this.error(e.message)
      console.log(e)
    }
    this.loader.dismiss()
  }

  async signUpUser(email, password, phone, admin) {
    this.user = await this.firebaseService.signUp(email, password).then(res => this.user = res.user)
    this.user = { ...this.user, password, phone, admin }

    this.userWithToken = await this.userService.generateAccessToken(this.user).pipe(first()).toPromise()

    await this.userService.addUser(this.userWithToken)
    this.signUpSuccess()
  }

  success() {
    let accessToken = this.userWithToken.accessToken
    localStorage.setItem('accessToken', accessToken)
    let decodedAccessToken: User = this.authenticationService.decodeAccessToken(accessToken)
    decodedAccessToken.admin ?
      this.router.navigate(['/admin']) :
      this.router.navigate(['/user'])
  }

  error(message: string) {
    this.utils.openSnackBar(message, 'error')
  }

  signUpSuccess() {
    this.utils.openSnackBar('Conta criada com sucesso.', 'success')
  }

}
