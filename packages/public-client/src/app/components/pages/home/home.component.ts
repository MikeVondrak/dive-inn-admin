import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IconCardConfig, IconCardImages, IconCardTextSizes } from '../../shared/models/icon-card.model';
import { MouseFacerTextPositions } from '../../shared/models/mouse-facer-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // template access
  public MouseFacerTextPostionsEnum = MouseFacerTextPositions;

  // @TODO - where should this data live?
  public showLogo: boolean = false;
  public footerAddress: string[] = ['1380 S Broadway', 'Denver 80210'];
  public footerPhone: string = '720-242-6157';
  public contactHours: string[] = ['Open EVERY Day', '11AM - 2AM'];
  public navMenuItems: string[] = ['Home', 'Menu', 'Events', 'Bookings', 'About Us', 'Work With Us', 'Dive Shop'];

  public mouseFacerCardTitle_Charters: string = 'Charters';
  public mouseFacerCardTitle_DiveShop: string = 'Dive Shop';
  public mouseFacerCardTitle_WideOpen: string = 'Wide Open';

  public contactCardConfig: IconCardConfig[] = [
    {
      iconCardImage: IconCardImages.MAP_MARKER,
      textLines: [
        {
          uiLabel: this.footerAddress[0], 
          size: IconCardTextSizes.LARGE,
        },
        {
          uiLabel: this.footerAddress[1], 
          size: IconCardTextSizes.SMALL,
        },
      ]
    },
    {
      iconCardImage: IconCardImages.CLOCK, 
      textLines: [
        {
          uiLabel: this.contactHours[0], 
          size: IconCardTextSizes.SMALL,
        },
        {
          uiLabel: this.contactHours[1], 
          size: IconCardTextSizes.LARGE,
        },
      ]
    },
    {
      iconCardImage: IconCardImages.AT_SIGN, 
      textLines: [
        {
          uiLabel: this.footerPhone, 
          size: IconCardTextSizes.LARGE,
        },
        {
          uiLabel: 'contact@diveinndenver', 
          size: IconCardTextSizes.SMALL,
        },
      ]
    }
  ];

  public numWaves = [1, 1, 1, 1, 1, 1, 1, 1]; // number of waves per contact section

  // @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
  //   console.log('SCROLL EVENT', (event.target as Element).scrollTop);
  // }

  private destroy$ = new Subject<void>();


  constructor() { 
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

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
