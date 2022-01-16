import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.scss']
})
export class AlbumDisplayComponent implements OnInit {

  @Input() albumTitle: string = '';
  @Input() albumDescription: string = '';
  @Input() albumImageUrls: string[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
