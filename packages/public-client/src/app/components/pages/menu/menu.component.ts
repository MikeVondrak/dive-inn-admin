import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public bgPosition: string = '50% 30%';
  public bgSize: string = '150%';
  public titleLines: string[] = ['Menu', 'and', 'Specials'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
