import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private authS: AuthService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      // login: new FormControl(''),
      // password: new FormControl('')
    });
  }

  @ViewChild('passwordW', {static: false}) passwordW;
  @ViewChild('loginW', {static: false}) loginW;
  @ViewChild('eye', {static: false}) eye;

  @HostListener('document:mousedown', ['$event'])
  clickLogin(event: MouseEvent) {
    let check = (element, selector) => {
      if (element.nativeElement.contains(event.target)) {
        element.nativeElement.classList.add(selector);
      } else {
        element.nativeElement.classList.remove(selector);
      }
    };
    //login input
    check(this.loginW, 'form__inputWrapper-active');
    //password input
    check(this.passwordW, 'form__inputWrapper-active');
  }

  @ViewChild('pInput', {static: false}) pInput;

  toggleEye(): void {
    this.eye.nativeElement.classList.toggle('form__passwordEye-active');
    this.pInput.nativeElement.type = this.pInput.nativeElement.type == 'password' ? 'text' : 'password';
  }

  submit(): void {
    this.authS.login(this.form);
    this.router.navigate(['/main']);
  }
}
