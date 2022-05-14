import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Breakpoints, ViewportService } from 'src/app/services/viewport/viewport.service';
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
  public siteTitleLines = ['Local Events','Live Sports','& Games']

  // public showLogo: boolean = false;
  public footerAddress: string[] = ['1380 S Broadway', 'Denver 80210'];
  public footerPhone: string = '720-242-6157';
  public contactHours: string[] = ['Open EVERY Day', '11AM - 2AM'];
  public navMenuItems: string[] = ['Home', 'Menu', 'Find Us', 'Other Stuff']; // 'Events', 'Bookings', 'About Us', 'Work With Us', 'Dive Shop'];

  public mouseFacerCardTitle_Charters: string = 'Charters';
  public mouseFacerCardTitle_DiveShop: string = 'Dive Shop';
  public mouseFacerCardTitle_WideOpen: string = 'Wide Open';

  public bgPosition: string = '50% 30%';
  public bgSize: string = '150%';

  public contactSectionConfig: IconCardConfig[] = [
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


  constructor(private viewport: ViewportService) { 
    // set title bg props based on breakpoint - TODO FIX THIS UGLINESS
    this.viewport.viewportState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.setPropsForBreakpoints(state.currentBreakpoint);
      // this.bgSize = state.currentBreakpoint === 'zero' ? '150%'
      // : state.currentBreakpoint === 'min' ? '185%'
      // : state.currentBreakpoint === 'xs' ? '150%'
      // : state.currentBreakpoint === 'sm' ? '125%'
      // : state.currentBreakpoint === 'md' ? 'cover' : 'cover';
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // TODO - FIX THIS UGLINESS
  private setPropsForBreakpoints(currentBreakpoint: Breakpoints) {
    switch(currentBreakpoint) {
      case 'zero': this.bgSize = '200%'; this.bgPosition = '57% 24%'; break;
      case 'min': this.bgSize = '180%'; this.bgPosition = '54% 25%'; break;
      case 'xs': this.bgSize = '150%'; this.bgPosition = '50% 24%'; break;
      case 'sm': this.bgSize = '150%'; this.bgPosition = '50% 24%'; break;
      case 'md': this.bgSize = 'cover'; this.bgPosition = '50% 41.7%'; break;
      case 'lg': this.bgSize = 'cover'; this.bgPosition = '50% 41.7%'; break;
      case 'xl': this.bgSize = 'cover'; this.bgPosition = '50% 41.7%'; break;
      case 'ws': this.bgSize = 'cover'; this.bgPosition = '50% 41.7%'; break;
      case 'hd': this.bgSize = 'cover'; this.bgPosition = '50% 41.7%'; break;
    }
  }
}

