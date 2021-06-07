import { Injectable } from '@angular/core';
import {ISectionData} from '../services/app.service';

@Injectable()
export class SectionService {

  sections: ISectionData[] = [
    {
      title: 'СМОТР',
      lhsNum: 3,
      rhsNum: 4,
    },
    {
      title: 'Безопасность',
      lhsNum: 3,
      rhsNum: 4,
    },
    {
      title: 'Производственные задания и распоряжения',
      lhsNum: 3,
      rhsNum: 4,
    },
    {
      title: 'Состояние оборудования и отказы',
      lhsNum: 3,
      rhsNum: 4,
    },
    {
      title: 'Сбросы',
      lhsNum: 3,
      rhsNum: 4,
    },
  ];

  constructor() { }
}
