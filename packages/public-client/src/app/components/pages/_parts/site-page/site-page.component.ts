import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss']
})
export class SitePageComponent implements OnInit {

  public address: string = '';
  public phone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
