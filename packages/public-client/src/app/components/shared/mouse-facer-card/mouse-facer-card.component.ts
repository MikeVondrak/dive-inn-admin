import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-facer-card',
  templateUrl: './mouse-facer-card.component.html',
  styleUrls: ['./mouse-facer-card.component.scss']
})
export class MouseFacerCardComponent implements OnInit {

  @Input() title: string = 'title';
  @Input() description: string = '';
  @Input() imgUrl: string = '';
  @Input() textPosition: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
