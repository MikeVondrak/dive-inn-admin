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
  @HostBinding('style.--bgPosition') 
  @Input() bgPosition: string | undefined = '0% 0%';

  @HostBinding('style.--bgSize')
  @Input() bgSize: string | undefined = '100% 100%';

  @HostBinding('style.--imgSrc') 
  @Input() imgSrc: string = 'url()';

  /**
   * constructor
   */
  constructor() { }

  ngOnInit(): void {
  }
}
