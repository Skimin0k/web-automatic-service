import {Injectable} from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Helper {
  textFormat(line: any): string {
    line += '';
    line = line.split('').reverse();
    let result = [];
    for (let i = 0; i < line.length; i++) {
      if (i != 0 && i % 3 === 0) {
        result.push(' ');
      }
      result.push(line[i]);
    }
    return result.reverse().join('');
  }

  createText(center: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
             text: string, font_size = 'inherit', color = 'white', offset = 0) {
    return this.style(
      center.append('text').text(text),
      {
        'fill': color,
        'font-size': font_size,
        'transform': `translate(${0}, ${-offset})`,
        'text-anchor': 'middle',
      }
    );
  }

  dottedLine(center: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
             color: string,
             rectWidth: number,
             rectHeight: number,
             spaceBetween: number,
             blockWidth: number) {
    let pLine = center.append('g'),
      amount = blockWidth / (rectWidth + spaceBetween);

    for (let i = 0; i < amount; i++) {
      this.style(
        pLine.append('rect'),
        {
          'width': rectWidth,
          'height': rectHeight,
          'fill': color,
          'transform': `translate(${i * (spaceBetween + rectWidth)})`,
        }
      );
    }
    return pLine;
  }

  createArc(group: any, innerRadius: number, outerRadius: number, endAngle: number, startAngle: number = 0, cornerRadius = 0) {
    return group
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)
        .endAngle(endAngle)
        .cornerRadius(cornerRadius)
      );
  }

  createCircle(group: any, r: number, fill: string, stroke: string = 'none', stroke_opacity: string = '0', stroke_width: string = '0') {
    return this.style(
      group.append('circle'),
      {
        'r': r,
        'fill': fill,
        'stroke': stroke,
        'stroke-opacity': stroke_opacity,
        'stroke-width': stroke_width
      }
    );

  }

  createRect(group: d3.Selection<SVGGElement, unknown, HTMLElement, any>, width: number, height: number, r = 0, angle = 0) {
    return group
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', `translate(${Math.cos(angle) * r},${Math.sin(angle) * r})
                                      rotate(${angle * 180 / Math.PI + 90})`);
  }

  style(selection, styleObj) {
    for (let key of Object.keys(styleObj)) {
      selection.attr(key, styleObj[key]);
    }
    return selection;
  }
}
