import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {D3Helper} from '../d3Helper';
import {DataService, ICircleChart} from '../data.service';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss'],
  providers: [D3Helper]
})
export class FirstTaskComponent implements OnInit, AfterViewInit {

  private data: ICircleChart = {
    notAll: 0,
    all: 0,
  };

  constructor(private dh: D3Helper, private dataServise: DataService) {
    this.data = this.dataServise.firstTaskData.medium;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    let side = 400,
      circleRad = 376 / 2;

    let svg = d3.select('#wrapper')
      .append('svg')
      .attr('width', side)
      .attr('height', side);


    let grp = svg.append('g').attr('transform', 'translate(200,200)');

    this.dh.createCircle(grp, circleRad, '#171923', 'rgb(39, 42, 56)', '0.5', '2px');


    let borderArcs = grp.append('g')
      .attr('fill', 'rgb(39, 42, 56)')
      .attr('opacity', 0.5);

    let innerWidth = 8,
      outerWidth = 6;
    this.dh.createArc(borderArcs, circleRad - innerWidth, circleRad, 1, -1);
    this.dh.createArc(borderArcs, circleRad - innerWidth, circleRad, 1 + Math.PI, -1 + Math.PI);
    this.dh.createArc(borderArcs, circleRad - innerWidth - outerWidth, circleRad - innerWidth, .5, -.5);
    this.dh.createArc(borderArcs, circleRad - innerWidth - outerWidth, circleRad - innerWidth, .5 + Math.PI, -.5 + Math.PI);


    let start = -Math.PI * 1.15,
      end = Math.PI * .15,
      length = 100,
      point = d3.scaleLinear().domain([0, length]).range([start, end]);

    //фон метриков
    this.dh.createArc(grp, 160 - 45, 160, end + Math.PI * .5, start + Math.PI * .5)
      .attr('fill', '#1c1f2b');

    // отрисовка метриков
    let currentValue = start + (-start + end) * this.data.notAll / this.data.all;
    for (let i = 0; i <= length; i++) {
      this.dh.createRect(grp, 2, 25, 150, point(i))
        .attr('fill', point(i) < currentValue ? '#0089ff' : '#f7931e')

        //выдвижение
        .attr('height', 0)
        .transition()
        .delay(i * 15)
        .on('start', function() {
          d3.select(this)
            .transition()
            .duration(500)
            .ease(d3.easeLinear)
            .attr('height', 25);
        });
    }

    // пунктирная дуга
    length = 40;
    point = d3.scaleLinear().domain([0, length]).range([start, end]);

    for (let i = 0; i <= length; i++) {
      this.dh.createRect(grp, 4, 4, 100, point(i))
        .attr('fill', '#1f222e');
    }

    //группа пунктирной линии
    this.dh.dottedLine(grp, '#1f222e', 3, 3, 3, 120)
      .attr('transform', `translate(${-58}, ${-20})`);


    this.dh.createRect(grp, 3, 45, 160, start)
      .attr('fill', '#303549'); // левый
    this.dh.createRect(grp, 3, 45, 160, end)
      .attr('fill', '#303549');   // правый


    grp
      .append('rect')
      .attr('width', 3)
      .attr('height', 45)
      .attr('transform', `translate(${23},${-20}) rotate(${90})`)
      .attr('fill', 'white')
      .transition()
      .duration(600)
      .attr('transform', `translate(${Math.cos(currentValue) * 160},${Math.sin(currentValue) * 160}) rotate(${currentValue * 180 / Math.PI + 90})`);

    // легенда
    let legend = svg.append('g')
      .attr('transform', `translate(${side / 2}, ${side / 2})`);

    this.dh.createText(legend, 'ТН', '20px', '#606580', 65);
    this.dh.createText(legend, this.dh.textFormat(this.data.notAll), '32px', '#D7E2F2', 30);
    this.dh.createText(legend, this.dh.textFormat(this.data.all), '28px', '#0089FF', -15);
    this.dh.createText(legend, this.dh.textFormat(this.data.notAll - this.data.all), '23px', '#F7931E', -50);
    this.dh.createText(legend, 'План', '23px', '#D7E2F2', -85);
    this.dh.createText(legend, 'переработки', '23px', '#D7E2F2', -115);

  }


}
