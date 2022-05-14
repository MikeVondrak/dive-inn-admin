import { Component, Input, OnInit } from '@angular/core';
import { navItem } from '../site-header/site-header.component';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})
export class SiteNavComponent implements OnInit {

  @Input() navItems: navItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
