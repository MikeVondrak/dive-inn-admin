import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface navItem {
  url: string,
  title: string
}
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit, OnDestroy {
  public showLogo: boolean = false;
  public navItems: navItem[] = [
    {url: '/home', title: 'Home'},
    {url: '/inside', title: 'Menu'},
    {url: '/inside', title: 'Events'},
    {url: '/find-us', title: 'Find Us'},
  ]

  private destroy$ = new Subject<void>();
  
  constructor() { }

  ngOnInit(): void {
    // Watch scrollTop to show/hide header logo
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$)).subscribe((event: Event) => {      
      if (document?.scrollingElement?.scrollTop) {
        if (document?.scrollingElement?.scrollTop > 250) {
          this.showLogo = true;
        } else {
          this.showLogo = false;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
