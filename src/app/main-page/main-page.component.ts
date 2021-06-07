import {Component, OnInit} from '@angular/core';
import {AuthService} from '../form/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private authS: AuthService) {
  }

  logout(): void {
    this.authS.logout();
  }

  ngOnInit(): void {
  }

}
