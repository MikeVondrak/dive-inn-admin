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

  //public filledState: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public navTrackBy(index: number, item: NavItem) {
    console.log('USING TRACKBY');
    return item.title;
  }

  public selectPage(navItem: NavItem) {
    console.log('==== SELECT PAGE', {navItem});
    console.table(this.navItems);
    this.navItems.forEach(nav => {
      nav.filledState = false;
    });
    navItem.filledState = true;
    console.table(this.navItems);
    this.cdr.detectChanges();
  }
}
