import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  signIn = true
  user: any
  constructor(private firebaseService: FirebaseService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  async onSubmit() {
    let { email, password } = this.loginForm.value
    try {
      if (this.signIn) {
        this.user = await this.firebaseService.signIn(email, password).then(res => this.user = res.user)
      } else {
        this.user = await this.firebaseService.signUp(email, password).then(res => this.user = res.user)
        await this.userService.addUser({ ...this.user, password })
      }
      this.success()
    } catch (e) {
      console.log(e)
    }
  }

  success() {
    localStorage.setItem('user', JSON.stringify(this.user))
    this.router.navigate(['/calendar'])
  }
}
