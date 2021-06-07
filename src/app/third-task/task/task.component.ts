import {Component, Input, OnInit} from '@angular/core';
import {AppService, ITaskData} from '../services/app.service';
import {StatBlockService} from '../stat-block/stat-block.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() data: ITaskData;
  @Input() index: number;



  constructor(private appS: AppService, private statS: StatBlockService) { }

  ngOnInit(): void {
  }

  deleteFromData(){
    let index = this.appS.taskData.indexOf(this.data)
    this.appS.taskData.splice(index, 1)
    this.appS.update()
    this.statS.update()
  }

}
