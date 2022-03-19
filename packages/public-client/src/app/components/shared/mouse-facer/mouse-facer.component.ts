import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mouse-facer',
  templateUrl: './mouse-facer.component.html',
  styleUrls: ['./mouse-facer.component.scss']
})
export class MouseFacerComponent implements OnInit {
  @ViewChild('MouseFacer') mouseFacer?: ElementRef; // optional property to avoid having to initialize

  @Input() imgSrc: string = '';

  //@HostListener('mousemove', ['$event']) mouseTracker(event: MouseEvent): void { this.trackMouse(event); }

  
  
  constructor() { }

  ngOnInit(): void {
  }

  private trackMouse(event: MouseEvent) {
    //this.mouseFacer?.nativeElement.
  }

}
