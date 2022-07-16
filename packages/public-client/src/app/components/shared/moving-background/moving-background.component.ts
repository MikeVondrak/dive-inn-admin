import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Coord, CssProp, MovingBackgroundConfig, Orientations } from 'src/app/models/moving-background-item.model';
import { Breakpoints, ViewportService } from 'src/app/services/viewport/viewport.service';

@Component({
  selector: 'app-moving-background',
  templateUrl: './moving-background.component.html',
  styleUrls: ['./moving-background.component.scss']
})
export class MovingBackgroundComponent implements OnInit, OnDestroy {

  @Input() orientationConfigs: Map<Orientations, Map<Breakpoints, MovingBackgroundConfig>> = new Map();
  // @Input() bgSizes: Map<Breakpoints, string> = new Map();
  // @Input() bgPositions: Map<Breakpoints, string> = new Map();
  // @Input() cssClasses: Map<Breakpoints, string[]> = new Map();
  // @Input() siteTitleCoords: Map<Breakpoints, Coord> = new Map();
  
  @Input() imgSrc: string = '';
  @Input() textLines: string[] = [];

  private destroy$ = new Subject<void>();
  public bgSize: string | undefined = '';
  public bgPosition: string | undefined = '';

  constructor(private viewport: ViewportService) {       
  }

  ngOnInit(): void {
    
    // @TODO: set the initial viewport state here

    
    this.setPropsForBreakpoints('zero');
    this.viewport.viewportState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      
      
      console.log('!!!!!', this.bgSize, this.bgPosition, state.currentBreakpoint);
      

      this.setPropsForBreakpoints(state.currentBreakpoint);
    });
  }

  private setPropsForBreakpoints(currentBreakpoint: Breakpoints) {

    const bpConfig = this.orientationConfigs.get(Orientations.PORTRAIT)?.get(currentBreakpoint);

    // @TODO portrait vs landscape
    this.bgSize = bpConfig?.bgSize;
    this.bgPosition = bpConfig?.bgPosition;
    console.log('+++++', this.bgSize, this.bgPosition);

  //   switch(currentBreakpoint) {
  //     case 'zero': this.bgSize = this.bgSizes.get('zero'); this.bgPosition = this.bgPositions.get('zero'); break;
  //     case 'min': this.bgSize = this.bgSizes.get('min'); this.bgPosition = this.bgPositions.get('min'); break;
  //     case 'xs': this.bgSize = this.bgSizes.get('xs'); this.bgPosition = this.bgPositions.get('xs'); break;
  //     case 'sm': this.bgSize = this.bgSizes.get('sm'); this.bgPosition = this.bgPositions.get('sm'); break;
  //     case 'md': this.bgSize = this.bgSizes.get('md'); this.bgPosition = this.bgPositions.get('md'); break;
  //     case 'lg': this.bgSize = this.bgSizes.get('lg'); this.bgPosition = this.bgPositions.get('lg'); break;
  //     case 'xl': this.bgSize = this.bgSizes.get('xl'); this.bgPosition = this.bgPositions.get('xl'); break;
  //     case 'ws': this.bgSize = this.bgSizes.get('ws'); this.bgPosition = this.bgPositions.get('ws'); break;
  //     case 'hd': this.bgSize = this.bgSizes.get('hd'); this.bgPosition = this.bgPositions.get('hd'); break;
  //   }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
