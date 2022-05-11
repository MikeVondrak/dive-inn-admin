import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MouseFacerTextPositions } from '../models/mouse-facer-card.model';

@Component({
  selector: 'app-mouse-facer-title-card',
  templateUrl: './mouse-facer-title-card.component.html',
  styleUrls: ['./mouse-facer-title-card.component.scss']
})
export class MouseFacerTitleCardComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() titleLines: string[] = [];  

  @HostBinding('style.--mouseFacerCardHeight') 
  @Input() height: string = '50vw';
  
  @HostBinding('style.--mouseFacerCardText') 
  @Input() text: string = 'Undefined';

  @HostBinding('style.--bgPosition') 
  @Input() bgPosition: string = '50% 50%';

  @HostBinding('style.--bgSize')
  @Input() bgSize: string = 'cover';

  public MouseFacerTextPositionsEnum = MouseFacerTextPositions;

  constructor() { }

  ngOnInit(): void {
  }

}
