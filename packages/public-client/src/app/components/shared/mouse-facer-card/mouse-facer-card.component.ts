import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MouseFacerTextPositions } from '../models/mouse-facer-card.model';

@Component({
  selector: 'app-mouse-facer-card',
  templateUrl: './mouse-facer-card.component.html',
  styleUrls: ['./mouse-facer-card.component.scss']
})
export class MouseFacerCardComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = 'title';
  @Input() description: string = '';
  @Input() textPosition: MouseFacerTextPositions = MouseFacerTextPositions.TOP_LEFT;

  @HostBinding('style.--mouseFacerCardHeight') 
  @Input() height: string = '40vw';
  
  @HostBinding('style.--mouseFacerCardText') 
  @Input() text: string = 'Undefined';

  public MouseFacerTextPositionsEnum = MouseFacerTextPositions;

  constructor() { }

  ngOnInit(): void {
  }

}
