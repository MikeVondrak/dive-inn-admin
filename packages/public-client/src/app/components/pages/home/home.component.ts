import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public footerAddress: string = '1380 South Broadway';
  public footerPhone: string = '720-242-6157';
  public contactHours: string[] = ['M-W 10AM-1AM', 'TH-F 11AM-1AM', 'SA-SU 12PM-1AM'];

  constructor() { }

  ngOnInit(): void {
  }

  
}
