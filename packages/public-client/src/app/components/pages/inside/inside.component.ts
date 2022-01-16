import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {
  public albumImageUrls: string[] = [
    '/assets/images/logoLg.png',
    '/assets/images/logoLg.png',
    '/assets/images/logoLg.png',
    '/assets/images/logoLg.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
