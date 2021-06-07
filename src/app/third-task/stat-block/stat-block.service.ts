import {HostListener, Injectable} from '@angular/core';
import {AppService} from '../services/app.service';
import {log} from 'util';

export interface IStateData{
  title: string;
  number: number;
}



@Injectable()


export class StatBlockService {

  statData: IStateData[] = [
    {title: 'Все', number: 0},
    {title: 'Новое', number: 0},
    {title: 'Завершено', number: 0},
    {title: 'В работе', number: 0},
    {title: 'Не квитировано', number: 0},
  ];

  constructor(private appS : AppService) {
    this.update()
  }

  setNull(){
    for (let item of this.statData){
      item.number = 0;
    }
  }

  printAllStat(){
    for (let item of this.statData){
      console.log(item.title + '  ' + item.number);
    }
  }

  update(){
    this.setNull()
    this.statData[0].number = this.appS.postData.length + this.appS.taskData.length
    for(let item of this.appS.postData){
      switch (item.status) {
        case 'Новое': this.statData[1].number++; break;
        case 'Завершено': this.statData[2].number++; break;
        case 'В работе': this.statData[3].number++; break;
      }
    }
    for(let item of this.appS.taskData){
      switch (item.footerStatus){
        case 'Квитировано': break;
        case 'Не квитировано': this.statData[4].number++; break;
      }
      switch (item.headerStatus) {
        case 'Новое': this.statData[1].number++; break;
        case 'Завершено': this.statData[2].number++; break;
        case 'В работе': this.statData[3].number++; break;
      }
    }
  }



}
