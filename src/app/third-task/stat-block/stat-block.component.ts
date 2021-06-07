import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IStateData, StatBlockService} from './stat-block.service';
import {AppService} from '../services/app.service';


@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})


export class StatBlockComponent implements OnInit {

  @Input() stat: IStateData;

  constructor(public statS : StatBlockService, public appS : AppService) { }


  @HostListener('click', [])
  onClick(){
    this.appS.filters.statusFilter = this.stat.title
    this.appS.update()
    this.statS.update()

  }

  ngOnInit(): void {
  }

}
