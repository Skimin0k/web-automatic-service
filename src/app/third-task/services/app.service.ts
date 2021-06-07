import {SectionService} from '../section/section.service';
import {Injectable} from '@angular/core';

export interface IPostData {
  index?: number;
  title: string;
  date: Date;

  category: string;
  status: string;
  type: string;
  priority: number;
}

export interface ITaskData {
  index?: number;
  category: string;
  title: string;
  text: string;
  date: Date;

  type: string;
  priority: number;
  footerStatus: string;
  headerStatus: string;
}

export interface ISectionData {
  title: string;
  lhsNum: number;
  rhsNum: number;
}

interface Ifilter {
  categoryFilter: string; // РАЗ ДВА ТРИ
  priorityFilter: string; //
  statusFilter: string;   // новое, в работе
  typeFilter: string[];   // СМОТР, Безопасность...
  searchFilter: string;   // строка поиска
}


@Injectable()
export class AppService {

  priorityTable = {
    'Выбрать все': 0,
    'Низкий приоритет': 1,
    'Средний приоритет': 2,
    'Высокий приоритет': 3
  };

  postData: IPostData[] = [
    {
      title: 'Температура верха',
      date: new Date(),
      status: 'Завершено',
      category: 'РАЗ',
      type: 'Производственные задания и распоряжения',
      priority: 1,
    },
    {
      title: 'Температура верха',
      date: new Date(),
      status: 'Новое',
      category: 'ДВА',
      type: 'Производственные задания и распоряжения',
      priority: 2,
    },
    {
      title: 'Температура верха К-10.',
      date: new Date(),
      status: 'Завершено',
      category: 'ТРИ',
      type: 'Безопасность',
      priority: 2,
    },
    {
      title: 'Температура верха К-11.',
      date: new Date(),
      status: 'Новое',
      category: 'РАЗ',
      type: 'Безопасность',
      priority: 3,
    },
    {
      title: 'Температура верха К-2.',
      date: new Date(),
      status: 'Завершено',
      category: 'ДВА',
      type: 'СМОТР',
      priority: 3,
    },
    {
      title: 'Температура верха К-2.',
      date: new Date(),
      status: 'Новое',
      category: 'ТРИ',
      type: 'СМОТР',
      priority: 3,
    },
  ];
  taskData: ITaskData[] = [
    {
      category: 'АВТ-10',
      priority: 3,
      title: 'Событие Приема-Передачи смены',
      text: 'На время приемки смены установка на нормальном технологическом режиме Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis?',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'В работе',
      type: 'Безопасность'
    },
    {
      category: 'АВТ-10',
      priority: 2,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Квитировано',
      headerStatus: 'В работе',
      type: 'Состояние оборудования и отказы'
    },
    {
      category: 'АВТ-10',
      priority: 1,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'В работе',
      type: 'Состояние оборудования и отказы'
    },
    {
      category: 'АВТ-10',
      priority: 3,
      title: 'Событие Приема-Передачи смены',
      text: 'На время приемки смены установка на нормальном технологическом режиме Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis?',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'В работе',
      type: 'Безопасность'
    },
    {
      category: 'АВТ-10',
      priority: 2,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Квитировано',
      headerStatus: 'В работе',
      type: 'Сбросы'
    },
    {
      category: 'АВТ-10',
      priority: 1,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'В работе',
      type: 'Безопасность'
    },
    {
      category: 'АВТ-10',
      priority: 3,
      title: 'Событие Приема-Передачи смены',
      text: 'На время приемки смены установка на нормальном технологическом режиме Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis?',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'В работе',
      type: 'Сбросы'
    },
    {
      category: 'АВТ-10',
      priority: 2,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Квитировано',
      headerStatus: 'В работе',
      type: 'СМОТР'
    },
    {
      category: 'АВТ-10',
      priority: 1,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'Новое',
      type: 'Сбросы'
    },
    {
      category: 'АВТ-10',
      priority: 3,
      title: 'Событие Приема-Передачи смены',
      text: 'На время приемки смены установка на нормальном технологическом режиме Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis?',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'Новое',
      type: 'СМОТР'
    },
    {
      category: 'АВТ-10',
      priority: 2,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Квитировано',
      headerStatus: 'Завершено',
      type: 'СМОТР'
    },
    {
      category: 'АВТ-11',
      priority: 1,
      title: 'КПЭ по качеству',
      text: 'Отклонение в качестве рефлюкса на 0.9% масс',
      date: new Date(),
      footerStatus: 'Не квитировано',
      headerStatus: 'Завершено',
      type: 'СМОТР'
    },
  ];

  showPosts: IPostData[];
  showTasks: ITaskData[];

  dataForDM: string[] = [];


  currentDisplay: 'short' | 'long' = 'long';


  filters : Ifilter = {
    categoryFilter: 'Выбрать все',
    priorityFilter: 'Выбрать все',
    statusFilter: 'Все',
    typeFilter: [],
    searchFilter: '',
  };

  constructor() {
    this.update();
  }

  setDefaultFilters() {
    this.filters.statusFilter = 'Все';
    this.filters.typeFilter = [];
    this.filters.searchFilter = '';
    this.filters.priorityFilter = 'Выбрать все';
    this.filters.categoryFilter = 'Выбрать все';
  }

  update() {
    this.updateDynamicMenu();
    this.updateShowData();
  }

  updateShowData() {
        // фильтр по приоритету
    let priorityF = (item) => this.priorityTable[this.filters.priorityFilter] === 0 || this.priorityTable[this.filters.priorityFilter] === item.priority,
        // флильтр по поиску в title
        searchF = (item) => this.filters.searchFilter === '' || item.title.toLowerCase().includes(this.filters.searchFilter.toLowerCase()),
        // фильтр по типу объекта
        typeF = (item) => this.filters.typeFilter.length === 0 || this.filters.typeFilter.some((type) => type === item.type),
        // фильтр по категории
        categoryF = (item) => this.filters.categoryFilter === 'Выбрать все' || this.filters.categoryFilter === item.category


    this.showPosts = [...this.postData]
      .filter(priorityF)
      .filter(typeF)
      .filter(searchF)
      .filter(categoryF)
      .filter((item) => this.filters.statusFilter === 'Все' || this.filters.statusFilter === item.status)




    this.showTasks = [...this.taskData]
      .filter(priorityF)
      .filter(typeF)
      .filter(searchF)
      .filter(categoryF)
      .filter((item) => this.filters.statusFilter === 'Все' ||
        (this.filters.statusFilter === 'Не квитировано' && item.footerStatus === this.filters.statusFilter)
        || this.filters.statusFilter === item.headerStatus);

  }

  updateDynamicMenu() {
    let allData: string[] = [];
    if (this.currentDisplay === 'long') {
      allData = this.postData.map((item) => item.category);
    } else {
      allData = this.taskData.map((item) => item.category);
    }
    this.dataForDM.length = 0;

    this.dataForDM.push(...['Выбрать все', ...allData.reduce((acc, value) => {
      if (acc.indexOf(value) === -1) {
        acc.push(value);
      }
      return acc;
    }, [])])

  }

}
