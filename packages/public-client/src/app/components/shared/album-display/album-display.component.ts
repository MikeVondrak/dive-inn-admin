import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
