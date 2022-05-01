import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mouse-facer',
  templateUrl: './mouse-facer.component.html',
  styleUrls: ['./mouse-facer.component.scss']
})
export class MouseFacerComponent implements OnInit {
  @ViewChild('MouseFacer') mouseFacer?: ElementRef; // optional property to avoid having to initialize
 
  /**
   * CSS bg position value
   */
  @HostBinding('style.--bgPositionVertical') 
  @Input() bgPositionVertical: string = '40%';
  
  @HostBinding('style.--imgSrc') 
  @Input() imgSrc: string = 'url()';

  /**
   * constructor
   */
  constructor() { }

  ngOnInit(): void {
  }
}
