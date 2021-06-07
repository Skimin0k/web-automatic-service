import {Component, OnInit} from '@angular/core';
import {DataService, ILineData, ISubLine} from '../data.service';
import {offsetSegment} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss'],
  providers: [DataService]
})
export class SecondTaskComponent implements OnInit {
  offsets : number[] = [];

  constructor(public secondS: DataService) {
    for(let line of secondS.secondTaskData){
      let counter =0;
      for(let item of line.subLines){
        if(item.fact !== item.model) counter++
      }
      this.offsets.push(counter);
    }
  }

  ngOnInit(): void {
  }


  clickSubLine(elem : HTMLDivElement) {
    let els = document.getElementsByClassName('dropMenu__subLine-blue')
    for (let i=0;i <els.length; i++) {
      els[i].classList.toggle('dropMenu__subLine-blue')
    }
    elem.classList.toggle('dropMenu__subLine-blue')
  }
}
