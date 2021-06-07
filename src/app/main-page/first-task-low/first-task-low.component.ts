import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {D3Helper} from '../d3Helper';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';
import {DataService, ICircleChart} from '../data.service';

@Component({
  selector: 'app-first-task-low',
  templateUrl: './first-task-low.component.html',
  styleUrls: ['./first-task-low.component.scss'],
  providers: [D3Helper]
})
export class FirstTaskLowComponent implements OnInit, AfterViewInit {

  private data: ICircleChart = {
    notAll: 0,
    all: 0
  };

  constructor(private dh: D3Helper, private dataService: DataService) {
    this.data = this.dataService.firstTaskData.low;
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

    let width = 400;

    let svg = d3
      .select('#quad')
      .append('svg')
      .attr('width', width)
      .attr('height', width);


    let center = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${width / 2})`);

    this.dh.style(
      center.append('circle'),
      {
        'r': 335 / 2,
        'fill': '#171923',
        'stroke': 'rgb(39, 42, 56)',
        'stroke-opacity': '0.5',
        'stroke-width': '2px',
      });

    // верхняя и нижняя рамка
    let innerWidth = 8,
      outerWidth = 5;

    let borderArcs = center.append('g')
      .attr('fill', 'rgb(39, 42, 56)')
      .attr('opacity', 0.5);

    this.dh.createArc(borderArcs, 335 / 2 - innerWidth, 335 / 2, 1, -1);
    this.dh.createArc(borderArcs, 335 / 2 - innerWidth, 335 / 2, 1 + Math.PI, -1 + Math.PI);

    this.dh.createArc(borderArcs, 335 / 2 - innerWidth - outerWidth, 335 / 2 - innerWidth, .5, -.5);
    this.dh.createArc(borderArcs, 335 / 2 - innerWidth - outerWidth, 335 / 2 - innerWidth, .5 + Math.PI, -.5 + Math.PI);


    this.dh.createArc(center, 125, 140, 2 * Math.PI)
      .attr('fill', '#1c1f2b');


    this.dh.createArc(center, 130, 135, 2 * Math.PI)
      .attr('fill', 'rgb(247, 147, 30)')
      .attr('opacity', .2);

    // процентная полоска


    center
      .append('path')
      .attr('fill', 'white')
      .transition()
      .duration(1000)
      .attrTween('d', () => (t) => {
        return (d3.arc().cornerRadius(15)({
          outerRadius: 135,
          innerRadius: 130,
          startAngle: 0,
          endAngle: d3.interpolate(0, 2 * Math.PI * this.data.notAll / this.data.all)(t)
        }));
      });


    this.dh.createText(center, 'ТН', '23,93px', '#606580', 90);
    this.dh.createText(center, 'Выработка', '26px', '#D7E2F2', 50);
    this.dh.createText(center, this.dh.textFormat(this.data.notAll), '28px', '#D7E2F2', 0);
    this.dh.createText(center, this.dh.textFormat(this.data.all), '28px', '#0089FF', -50);
    this.dh.createText(center, this.dh.textFormat(this.data.notAll - this.data.all), '28px', '#F7931E', -90);


  }

}
