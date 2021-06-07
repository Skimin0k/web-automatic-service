import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class AuthService {
  private isAuth: boolean = false;

  personData = {
    admin: 'admin',
    123: '123',
  };

  login(form: FormGroup): void {
    if (this.personData.hasOwnProperty(form.value.login)) {
      this.isAuth = form.value.password === this.personData[form.value.login];
    }
  }

  logout(): void {
    this.isAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

}


