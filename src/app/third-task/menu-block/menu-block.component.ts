import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss']
})
export class MenuBlockComponent implements OnInit {

  @Input()  data: string[]
  @Input()  targetFilter: string;

  constructor(public appS : AppService) {
  }

  @ViewChild('wrapper', {static: false}) wrapperRef
  @ViewChild('host', {static:false}) el

  @HostListener('document:click', ['$event'])
  protected toggleMenu(event: Event){
    if (!this.el.nativeElement.contains(event.target)) {
      this.wrapperRef.nativeElement.classList.add('menu__wrapper--closed');
    }
  }


  click(event){
    this.wrapperRef.nativeElement.classList.add('menu__wrapper--closed');

    if(this.targetFilter === 'priorityFilter') this.appS.filters.priorityFilter = event.target.innerHTML
    else this.appS.filters.categoryFilter = event.target.innerHTML

    this.appS.update()
  }


  ngOnInit() {
  }
}
