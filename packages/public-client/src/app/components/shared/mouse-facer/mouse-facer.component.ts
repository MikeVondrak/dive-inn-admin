import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mouse-facer',
  templateUrl: './mouse-facer.component.html',
  styleUrls: ['./mouse-facer.component.scss']
})
export class MouseFacerComponent implements OnInit {
  @ViewChild('MouseFacer') mouseFacer?: ElementRef; // optional property to avoid having to initialize

  @Input() imgSrc: string = '';

  @HostListener('mousemove', ['$event']) mouseTracker(event: MouseEvent): void { this.trackMouse(event); }

  
  
  constructor() { }

  ngOnInit(): void {
  }

  private trackMouse(event: MouseEvent) {
    const transformAmount = 50; // % 3d rotation
    
    const mouseX = event.x;
    const mouseY = event.y;
    const winWidth = event.view?.innerWidth;
    const winHeight = event.view?.innerHeight;
    const dX = mouseX / (winWidth || 1); // % along axis
    const dY = mouseY / (winHeight || 1);
    const distanceFromCenterX = dX - 0.50; // % dist on X - 50%
    const distanceFromCenterY = dY - 0.50; // % dist on Y - 50%
    const tX = distanceFromCenterX * transformAmount * 2;
    const tY = distanceFromCenterY * transformAmount * 2;

    console.log({tX}, {tY});
  }

}
