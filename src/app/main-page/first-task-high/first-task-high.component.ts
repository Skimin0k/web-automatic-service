import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {D3Helper} from '../d3Helper';
import {DataService, IHighTask} from '../data.service';

@Component({
  selector: 'app-first-task-high',
  templateUrl: './first-task-high.component.html',
  styleUrls: ['./first-task-high.component.scss'],
  providers: [D3Helper]
})

export class FirstTaskHighComponent implements OnInit, AfterViewInit {

  private data: IHighTask = {
    circleChart: {
      all: 0,
      notAll: 0,
    },
    columnsChart: []
  };

  constructor(private dh: D3Helper, private dataService: DataService) {
    this.data = this.dataService.firstTaskData.high;
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

    let svg = d3.select('#wrapper')
      .classed('wrapper', true)
      .append('svg')
      .attr('width', 900)
      .attr('height', 300);


    let back = svg.append('g')
      .attr('transform', `translate(${120}, ${0})`);

    let backHeader = back.append('g');


    backHeader.append('rect')
      .attr('width', 550)
      .attr('height', 55)
      .attr('fill', '#212430')
      .attr('opacity', '.5');

    this.dh.createText(backHeader, 'Гудрон', '23', '#D7E2F2')
      .attr('transform', `translate(${157}, ${35})`);

    this.dh.createText(backHeader, this.dh.textFormat(this.data.circleChart.notAll), '23', '#0089FF')
      .attr('transform', `translate(${550 - 50}, ${35})`);

    let backBottom = back.append('g')
      .attr('transform', `translate(${0}, ${55})`);


    this.dh.style(backBottom.append('rect'),
      {
        'width': 550,
        'height': 164,
        'fill': '#171923',
        'opacity': .5,
        'stroke': 'rgb(39, 42, 56)',
        'stroke-opacity': .5,
        'stroke-width': 2,
      });

    this.dh.createText(backBottom, 'Накопительно:', '20', '#606580')
      .attr('transform', `translate(${188}, ${35})`);


    this.dh.createText(backBottom, this.dh.textFormat(this.data.circleChart.all), '23', '#606580')
      .attr('transform', `translate(${550 - 50}, ${35})`);


    this.dh.createCircle(back, 110, '#1b1e27').attr('cy', 110);

    let circles = back.append('g')
      .attr('transform', `translate(${-110}, ${6})`);

    let rightSide = back.append('g')
      .attr('transform', `translate(${555}, ${0})`);


    this.drawColumns(backBottom, 550, 164);
    this.drawCircles(circles);
    this.drawRightSide(rightSide);

  }

  drawColumns(svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>, gWidth: number, gHeight: number) {
    let columnWidth = 10, columnHeight = 100;

    let columns = svg.append('g')
      .attr('transform', `translate(${gWidth - 430}, ${gHeight - 120})`);


    for (let i = 0, amount = 0; i < 30; i++) {
      let currentLineValue = i < this.data.columnsChart.length ? this.data.columnsChart[i].lineP : 0;
      let currentColumnValue = i < this.data.columnsChart.length ? this.data.columnsChart[i].columnP : 0;
      let currentPriority = i < this.data.columnsChart.length ? this.data.columnsChart[i].priority : 0;

      let priority = {
        0: '#0089FF',
        1: '#ffffff',
        2: '#f7931e',
        3: '#ff1d25'
      };

      // создание колонки
      let column = columns.append('g')
        .attr('transform', `translate(${(columnWidth + 4) * i}, ${0})`);

      column.append('rect')
        .classed('column', true)
        .attr('width', columnWidth)
        .attr('height', columnHeight)
        .attr('rx', 3)
        .attr('y', 5)
        .attr('fill', '#272a38')
        .on('mouseenter', function() {
          d3.select(this).attr('fill', '#122f4f');
        })
        .on('mouseleave', function() {
          d3.select(this).attr('fill', '#272a38');
        });

      // отрисовка риса
      for (let j = 0; j < (columnHeight / 4 - 1) * currentColumnValue / 100; j++) {
        column.append('rect')
          .attr('width', columnWidth * .6)
          .attr('height', 2)
          .attr('ry', 1)
          .attr('y', columnHeight - 4 * j)
          .attr('x', columnWidth * .4 / 2)
          .attr('pointer-events', 'none')
          .attr('fill',
            columnHeight - 4 * j > columnHeight - (columnHeight - 5) * currentLineValue / 100 ?
              priority[currentPriority] : priority[currentPriority + 1]
          )

          // появление
          .attr('opacity', 0)
          .transition()
          .delay(j * 20 + amount * 15
          )
          .on('start', function() {
            d3.select(this)
              .attr('opacity', 1);
          });

      }

      amount += (columnHeight / 4 - 1) * currentColumnValue / 100;
    }


    let points = [];
    let stepWidth = columnWidth + 4;
    // подготовка данных для линии
    for (let i = 0; i < this.data.columnsChart.length; i++) {
      points.push([i * stepWidth, columnHeight - (columnHeight - 5) * this.data.columnsChart[i].lineP / 100]);
      points.push([(i + 1) * stepWidth, columnHeight - (columnHeight - 5) * this.data.columnsChart[i].lineP / 100]);
    }

    // отрисовка линии
    let totalLength = 0;
    columns.append('path')
      .attr('d',
        d3.line()(points))
      .attr('transform', `translate(${-2}, ${1})`)
      .attr('fill', 'none')
      .attr('pointer-events', 'none')
      .attr('stroke', '#0089FF')
      .attr('stroke-width', 2)
      .each(function() {
        totalLength = this.getTotalLength();
      })
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', `${totalLength}`)
      .attr('class', 'test')
      .transition()
      .duration(4000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', '0');


    return columns;
  }

  drawCircles(svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>): void {

    let offsetToCenter = 208 / 2;

    let center = svg.append('g')
      .attr('transform', `translate(${offsetToCenter}, ${offsetToCenter})`);


    this.dh.createCircle(center, offsetToCenter, '#171923', 'rgb(39, 42, 56)', '0.5', '2px');

    this.dh.createArc(center, 90, 95, 0, 2 * Math.PI, 0)
      .attr('fill', '#122f4f');

    center.append('path')
      .transition()
      .duration(4000)
      .attr('fill', '#0089ff')
      .attrTween('d', () => (t) => {
        return (d3.arc().cornerRadius(15)({
          outerRadius: 95,
          innerRadius: 90,
          startAngle: 0,
          endAngle: d3.interpolate(0, 2 * Math.PI * this.data.circleChart.notAll / this.data.circleChart.all)(t)
        }));
      });


    let legend = center.append('g');
    this.dh.createText(legend, 'ТН', '16px', '#606580', 60);
    this.dh.createText(legend, this.dh.textFormat(this.data.circleChart.notAll), '20', '#D7E2F2', 10);
    this.dh.createText(legend, this.dh.textFormat(this.data.circleChart.all), '20', '#606580', -30);

    this.dh.dottedLine(legend, '#222431', 3, 3, 3, 100)
      .attr('transform', `translate(${-50}, ${0})`);
  }

  drawRightSide(svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>): void {
    let graph = svg.append('g');

    this.dh.style(
      graph.append('rect'),
      {
        'width': 70,
        'height': 220,
        'fill': '#171923',
        'stroke': 'rgb(39, 42, 56)',
        'stroke-opacity': '0.5',
        'stroke-width': '2px,'
      });

    this.dh.style(
      graph.append('rect'),
      {
        'width': 66,
        'height': 163,
        'fill': '#122f4f',
        'x': 2,
        'y': 220 - 165,
      });

    this.dh.style(
      graph.append('rect'),
      {
        'width': 66,
        'height': 90,
        'fill': '#0089ff',
        'x': 2,
        'y': 220 - 120
      });

    this.dh.dottedLine(graph, 'white', 2, 2, 3, 64)
      .attr('transform', `translate(${3}, ${80})`);

    this.dh.dottedLine(graph, 'white', 2, 2, 3, 64)
      .attr('transform', `translate(${3}, ${200})`);

    this.dh.createText(graph, '81', '26', '#D7E2F2')
      .attr('transform', `translate(${25}, ${35})`);

    this.dh.createText(graph, '%', '23', '#606580')
      .attr('transform', `translate(${50}, ${35})`);

  }
}
