import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import { AppReadyEvent } from './app-ready-event';
import { routeAnimations } from './animations/route.animations';
import { footerAnimations } from './animations/footer.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, footerAnimations],
})
export class AppComponent implements OnInit, AfterViewInit {
  public footerAnimationTag: string = 'stopped';
  
  private appReadyEvent: AppReadyEvent;
  private routeFragment: string | null = null;

  private lastRoute: string = '';
  

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
      try {
        const el = this.renderer.selectRootElement(selector, true); // preserve contents when selecting
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch(err) {
        console.error(err);
      }
    }
    }, 100); // wait to allow document to finish loading, scroll won't do anything if dom is not ready
    // @TODO - better way to do this?
  }

  public animateRouteTransition(outlet: RouterOutlet): string {
    if (outlet.isActivated) {
      const rt = outlet.activatedRoute?.snapshot?.url?.toString();
      // console.log('ANIMATE ROUTE TRANSITION', {rt}, outlet.isActivated ? rt : '');
      if (rt !== this.lastRoute) {
        this.lastRoute = rt;
        return rt;
      }
    }
    return this.lastRoute;
  }

  public routeAnimationStart(event: AnimationEvent) {
    console.log('ROUTE ANIMATION START');
    // avoid expression changed after checked error
    // setTimeout(() => {
    //   this.footerAnimationTag = 'animating';
    // });
  }

  public routeAnimationDone(event: AnimationEvent) {
    console.log('ROUTE ANIMATION DONE');
    // avoid expression changed after checked error
    // setTimeout(() => {
    //   this.footerAnimationTag = 'stopped';
    // });
  }

  public footerAnimationDone(event: AnimationEvent) {
    console.log('FOOTER ANIMATION DONE');
  }
}
