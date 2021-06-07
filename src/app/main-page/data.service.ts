import {Injectable} from '@angular/core';

// для второй задачи
export interface ISubLine {
  title: string,
  units: string,
  fact: number,
  model: number,
}

export interface ILineData {
  title: string,
  subLines: ISubLine[]
}

//
export interface ICircleChart {
  notAll: number,
  all: number,
}

interface IColumnsChart {
  columnP: number,
  lineP: number
  priority: number,
}

export interface IHighTask {
  circleChart: ICircleChart,
  columnsChart: IColumnsChart[],
}


@Injectable()
export class DataService {
  secondTaskData: ILineData[] = [
    {
      title: 'Сырье',
      subLines: [
        {
          title: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        }
      ]
    },
    {
      title: 'Топливо газообразное',
      subLines: [
        {
          title: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        }
      ]
    },
    {
      title: 'Жидкое топливо',
      subLines: [
        {
          title: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 225,
        },
        {
          title: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 226,
        }
      ]
    },
    {
      title: 'Дымовые газы',
      subLines: [
        {
          title: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 233,
        }
      ]
    },
    {
      title: 'Воздух',
      subLines: [
        {
          title: 'Загрузка печи по продукту',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на входе в печь',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Температура продукта на выходе из печи',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        },
        {
          title: 'Доля отгона сырья',
          units: 'Ед.изм.',
          fact: 224.9,
          model: 224.9,
        }
      ]

    },
  ];

  firstTaskData: {
    low: ICircleChart,
    medium: ICircleChart,
    high: IHighTask,
  } = {
    low: {
      all: 30000,
      notAll: 11000
    },
    medium: {
      all: 30000,
      notAll: 12000
    },
    high: {
      circleChart: {
        all: 30000,
        notAll: 13000,
      },
      columnsChart: [
        {
          columnP: 10,
          lineP: 10,
          priority: 0
        },
        {
          columnP: 17,
          lineP: 34,
          priority: 1
        },
        {
          columnP: 23,
          lineP: 62,
          priority: 1
        },
        {
          columnP: 34,
          lineP: 10,
          priority: 2
        },
        {
          columnP: 73,
          lineP: 23,
          priority: 1
        },
        {
          columnP: 16,
          lineP: 10,
          priority: 0
        },
        {
          columnP: 71,
          lineP: 61,
          priority: 0
        },
        {
          columnP: 31,
          lineP: 73,
          priority: 0
        },
        {
          columnP: 50,
          lineP: 50,
          priority: 0
        },
        {
          columnP: 60,
          lineP: 30,
          priority: 0
        },
        {
          columnP: 47,
          lineP: 56,
          priority: 0
        },
        {
          columnP: 74,
          lineP: 45,
          priority: 0
        },
        {
          columnP: 64,
          lineP: 60,
          priority: 0
        },
        {
          columnP: 10,
          lineP: 10,
          priority: 0
        },
        {
          columnP: 17,
          lineP: 34,
          priority: 1
        },
        {
          columnP: 23,
          lineP: 62,
          priority: 1
        },
        {
          columnP: 34,
          lineP: 10,
          priority: 2
        },
        {
          columnP: 73,
          lineP: 23,
          priority: 1
        },
        {
          columnP: 16,
          lineP: 10,
          priority: 0
        },
        {
          columnP: 71,
          lineP: 61,
          priority: 0
        },
        {
          columnP: 31,
          lineP: 73,
          priority: 0
        },
        {
          columnP: 50,
          lineP: 50,
          priority: 0
        },
        {
          columnP: 60,
          lineP: 30,
          priority: 0
        },
        {
          columnP: 47,
          lineP: 56,
          priority: 0
        },
        {
          columnP: 74,
          lineP: 45,
          priority: 0
        },
        {
          columnP: 64,
          lineP: 60,
          priority: 0
        },
        {
          columnP: 10,
          lineP: 10,
          priority: 0
        },
        {
          columnP: 17,
          lineP: 34,
          priority: 1
        },
        {
          columnP: 23,
          lineP: 62,
          priority: 1
        },
        {
          columnP: 34,
          lineP: 10,
          priority: 2
        }
      ]
    },
  };

  constructor() {

  }

}
