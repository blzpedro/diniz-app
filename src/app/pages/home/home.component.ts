import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  signIn = true
  user: any
  constructor(private firebaseService: FirebaseService, private router: Router, private userService: UserService, private utils: UtilsClass) { }

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
        this.signUpSuccess()
        this.user = await this.firebaseService.signUp(email, password).then(res => this.user = res.user)
        this.user = { ...this.user, password, phone, admin }
        await this.userService.addUser(this.user)
      }
      this.success()
    } catch (e) {
      console.log(e)
    }
  }

  async success() {
    let user = await this.userService.getUserById$(this.user.uid)
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigate(['/calendar'])
  }

  signUpSuccess() {
    this.utils.openSnackBar('Conta criada com sucesso.', 'success')
  }
}
