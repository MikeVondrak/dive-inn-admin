import { Component, Input, OnInit } from '@angular/core';

import { AlbumDisplayImagePosition } from 'src/app/models/album-display.model';
@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.scss']
})
export class AlbumDisplayComponent implements OnInit {
  @Input() showInfo: boolean = false;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrls: string[] = []; 


  /**
   * Instead of using the image position array and getting into ElementRef and nativeElement
   * use css classes for each position and remove the class to transition it into the frame
   */
  private positions: AlbumDisplayImagePosition[] = [
    { x: 800, y: 0 },
    { x: -800, y: 0 },
    { x: 0, y: 600 },
    { x: 0, y: -600 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public getImagePosition(index: number): AlbumDisplayImagePosition {
    const imgPosIdx = index % this.positions.length;
    return this.positions[imgPosIdx];
  }
}
