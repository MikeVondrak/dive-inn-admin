import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss']
})
export class SitePageComponent implements OnInit, OnDestroy {

  public address: string = '';
  public phone: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('------ CREATING SITE PAGE');
  }

  ngOnDestroy(): void {
    console.log('------- DESTROYING SITE PAGE');
  }

}
