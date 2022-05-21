import { Component, ElementRef, Input, OnInit, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavItem } from '../site-header/site-header.component';
import { PageSelectAnimation } from './site-nav.component.animations';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss'],
  animations: [PageSelectAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteNavComponent implements OnInit {

  @Input() navItems: NavItem[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  public navTrackBy(index: number, item: NavItem) {    
    return item.title;
  }

  public selectPage(navItem: NavItem) {
    this.navItems.forEach(nav => {
      nav.filledState = false;
    });
    navItem.filledState = true;
    this.cdr.detectChanges();
  }
}
