import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {AppService, ISectionData} from '../services/app.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})


export class SectionComponent implements OnInit {
  @Input() data: ISectionData;

  @ViewChild('section', {static: false}) sectionElem;
  constructor(public appS: AppService, private element: ElementRef) { }

  toggle(){
    this.sectionElem.nativeElement.classList.toggle('section-active');
  }

  @HostListener('click', [])
  onClick(){
    // индекс вхождения данного элемента в appS.typeFilter
    let has = this.appS.filters.typeFilter.indexOf(this.data.title)
    if( has === -1){
      this.appS.filters.typeFilter.push(this.data.title)
    }
    else{
      this.appS.filters.typeFilter.splice(has, 1)
    }
    this.appS.update()
  }
  ngOnInit(): void {
  }

}
