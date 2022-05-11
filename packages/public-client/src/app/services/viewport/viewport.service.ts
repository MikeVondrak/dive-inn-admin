// https://brianflove.com/2018-01-11/angular-window-provider/
// https://stackblitz.com/edit/angular-7-breakpoint-observer?file=src%2Fservices%2Fbreakpoint-observer.service.ts

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, min, shareReplay, startWith } from 'rxjs/operators';

export type Breakpoints = 'zero' | 'min' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'ws' | 'hd';
export enum BreakpointsEnum {
  zero, min, xs, sm, md, lg, xl, ws, hd
}
export interface ViewportState {
  previousBreakpoint: Breakpoints,
  currentBreakpoint: Breakpoints,
}

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  // @TODO - how to connect SCSS breakpoint values to these?
  private readonly breakpoints: Map<Breakpoints, string> = new Map([
    ['zero', '(min-width: 0px)'],
    ['min', '(min-width: 320px)'],
    ['xs', '(min-width: 440px)'],
    ['sm', '(min-width: 600px)'],
    ['md', '(min-width: 840px)'],
    ['lg', '(min-width: 1024px)'],
    ['xl', '(min-width: 1280px)'],
    ['ws', '(min-width: 1440px)'],
    ['hd', '(min-width: 1920px)'],
  ]);

  private _viewportState$: BehaviorSubject<ViewportState> = new BehaviorSubject<ViewportState>({ previousBreakpoint: 'min', currentBreakpoint: 'min' });
  private _viewportState: ViewportState;
  
  public window: Window | null;
  public viewportState$: Observable<ViewportState>;

  constructor(@Inject(DOCUMENT) private document: Document) {    
    this.window = this.document.defaultView;
    this._viewportState = { previousBreakpoint: this.getCurrentBreakpoint(), currentBreakpoint: this.getCurrentBreakpoint() };

    this.viewportState$ = fromEvent(window, 'resize').pipe(
      debounceTime(100),
      map((event: Event) => {        
        return this.getUpdatedViewportState();
      }),
      startWith(this.getUpdatedViewportState()),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  private getUpdatedViewportState(): ViewportState {
    const currentState: ViewportState = {
      previousBreakpoint: this._viewportState.currentBreakpoint,
      currentBreakpoint: this.getCurrentBreakpoint(),
    };
    this._viewportState = currentState;
    return currentState;
  }

  private getCurrentBreakpoint(): Breakpoints {
    // @TODO - what is / how does this syntax work?
    // const [[newSize = 'zero']] = Array.from(this.breakpoints.entries())
    //   .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    //   debugger;
    // return newSize;

    const bpMatches = Array.from(this.breakpoints.entries())
      .filter(bp => { const match = this.window?.matchMedia(bp[1]); console.log(bp[1], match); return match?.matches; })
      .map(bpQuery => bpQuery[0]);
    const bpMax = bpMatches[bpMatches.length - 1];
    return bpMax;
  }

}
