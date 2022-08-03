import { Component, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Coord, MovingBackgroundConfig } from 'src/app/models/moving-background-item.model';
import { Breakpoints, Orientations, ViewportService, ViewportState } from 'src/app/services/viewport/viewport.service';

@Component({
  selector: 'app-moving-background',
  templateUrl: './moving-background.component.html',
  styleUrls: ['./moving-background.component.scss']
})
export class MovingBackgroundComponent implements OnInit, OnDestroy {

  //@Input() orientationConfigs: Map<Breakpoints, MovingBackgroundConfig> = new Map();
  @Input() orientationConfigs: Map<Orientations, Map<Breakpoints, MovingBackgroundConfig>> = new Map();
  // @Input() bgSizes: Map<Breakpoints, string> = new Map();
  // @Input() bgPositions: Map<Breakpoints, string> = new Map();
  // @Input() cssClasses: Map<Breakpoints, string[]> = new Map();
  // @Input() siteTitleCoords: Map<Breakpoints, Coord> = new Map();
  
  @Input() imgSrc: string = '';
  @Input() textLines: string[] = [];

  @HostBinding('style.--textWidth') textWidth: string = '';;
  @HostBinding('style.--width') width: string = '';
  @HostBinding('style.--height') height: string = '';

  private destroy$ = new Subject<void>();
  public bgSize: string | undefined = '';
  public bgPosition: string | undefined = '';

  constructor(private viewport: ViewportService) {

  }

  ngOnInit(): void {
    
    //const initialBpState = { previousBreakpoint: 'zero' as Breakpoints, currentBreakpoint: 'zero' as Breakpoints, orientation: Orientations.LANDSCAPE };
    
    // @TODO - make sure we're initializing to the right state
    this.getConfigForBreakpoint(this.viewport.getCurrentBreakpoint(), this.viewport.getOrientation());
    
    console.log('1!!!!!', this.bgSize, this.bgPosition, this.orientationConfigs);

    this.viewport.viewportState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      
      
      console.log('2!!!!!', this.bgSize, this.bgPosition, state, this.orientationConfigs);
      const cfg = this.getConfigForBreakpoint(state.currentBreakpoint, state.orientation);
      this.setPropsForBreakpoints(cfg);
    });
  }

  private getConfigForBreakpoint(bp: Breakpoints, or: Orientations): MovingBackgroundConfig | undefined {
    let checkBp: Breakpoints = 'zero';
    // get the config for 'zero' bp which should always have every prop with a value (by convention)
    let config: MovingBackgroundConfig | undefined = this.orientationConfigs.get(or)?.get(checkBp);
    
    do {
      checkBp = this.viewport.getBpUp(checkBp);
      const configForBp = this.orientationConfigs.get(or)?.get(checkBp);
      if (!!configForBp) {
        config = { ...config, ...configForBp };
      }            
    } while (checkBp !== bp);
    return config;
  }

  private setPropsForBreakpoints(bpConfig: MovingBackgroundConfig | undefined) {
    // const bpConfig: MovingBackgroundConfig | undefined = this.orientationConfigs.get(state.orientation)?.get(state.currentBreakpoint);

    this.height = bpConfig?.height || '';
    this.width = bpConfig?.width || '';
    this.bgSize = bpConfig?.bgSize;
    this.bgPosition = bpConfig?.bgPosition;
    this.textWidth = bpConfig?.textWidth || '';


    console.log('+++++', {bpConfig});


  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
