import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public showLogo: boolean = false;
  public footerAddress: string[] = ['1380 S Broadway', 'Denver 80210'];
  public footerPhone: string = '720-242-6157';
  public contactHours: string[] = ['Open EVERY Day', '11AM - 2AM'];
  public navMenuItems: string[] = ['Home', 'Menu', 'Events', 'Bookings', 'About Us', 'Work With Us', 'Dive Shop'];

  public numWaves = [1, 1, 1, 1, 1, 1, 1, 1]; // number of waves per contact section

  // @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
  //   console.log('SCROLL EVENT', (event.target as Element).scrollTop);
  // }

  private destroy$ = new Subject<void>();


  constructor() { 
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$)).subscribe((event: Event) => {
      console.log('-----', document?.scrollingElement?.scrollTop + ' - ' + this.showLogo);
      if (document?.scrollingElement?.scrollTop) {
        if (document?.scrollingElement?.scrollTop > 250) {
          this.showLogo = true;
          console.log(this.showLogo);
        } else {
          this.showLogo = false;
        }
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
