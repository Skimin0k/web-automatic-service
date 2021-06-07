import {Component, Input, OnInit} from '@angular/core';
import {AppService, IPostData} from '../services/app.service';
import {StatBlockService} from '../stat-block/stat-block.service';

/* tslint:disable */

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() data: IPostData;
  @Input() index: number;

  constructor(private appS: AppService, private statS: StatBlockService) { }

  deleteFromData(){
    let index = this.appS.postData.indexOf(this.data)
    this.appS.postData.splice(index, 1)
    this.appS.update()
    this.statS.update()
  }

  ngOnInit(): void {
  }

}
