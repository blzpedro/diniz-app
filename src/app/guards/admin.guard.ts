import { Injectable } from '@angular/core';
import {
  Router, CanActivate,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user.interface';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const user: User = await this.authenticationService.authenticatedUser.pipe(first()).toPromise();
    if (!user) {
      this.router.navigate(['/']);
    }

    if (!user.admin) {
      this.router.navigate(['user']);
    }

    return true;
  }
}
