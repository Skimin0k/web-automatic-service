import { Component, OnInit } from '@angular/core';
import {AppService} from './services/app.service';
import {StatBlockService} from './stat-block/stat-block.service';
import {SectionService} from './section/section.service';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.scss']
})
export class ThirdTaskComponent implements OnInit {
  constructor(public appService: AppService,
              public statS : StatBlockService,
              public sectionS : SectionService) {
  }
  ngOnInit() {
  }

  searchItem(){
    this.appService.update()
  }
  togggleDisplay(){
    this.appService.currentDisplay = this.appService.currentDisplay ==='long' ? 'short' : 'long';
    this.appService.filters.categoryFilter = 'Выбрать все'
    this.appService.update()
  }

}

