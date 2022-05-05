import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppReadyEvent } from './app-ready-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  private appReadyEvent: AppReadyEvent;
  private routeFragment: string | null = null;

  constructor(
    appReady: AppReadyEvent,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
  ) {
    this.appReadyEvent = appReady;
  }

  ngOnInit(): void {
    // every time a new route is processed grab the #fragment if there is one
    this.route.fragment.subscribe(fragment => this.routeFragment = fragment);
    this.router.events.subscribe(event => { if (event instanceof NavigationEnd) { this.scrollToElement(); } });
  }

  ngAfterViewInit(): void {
    this.appReadyEvent.trigger(); // remove the "Loading..." overlay when app is ready    
  }

  private scrollToElement() {
    const selector = `#${this.routeFragment}`;
    setTimeout(() => {
      // try to scroll element into view if fragment exists
    if (this.routeFragment) {
      console.log('+++++++++++', selector);
      try {
        const el = this.renderer.selectRootElement(selector, true); // preserve contents when selecting
        console.log('+++++++++', {el});
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch(err) {
        console.error(err);
      }
    }
    });
    
  }
}
