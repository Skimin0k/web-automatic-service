import {Component, HostListener, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(
    private appS: AppService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('click', [])
  onClick(){
    this.appS.setDefaultFilters()
    this.appS.update()
  }

}
