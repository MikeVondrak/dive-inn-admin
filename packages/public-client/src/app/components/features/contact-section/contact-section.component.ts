import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ViewportService } from 'src/app/services/viewport/viewport.service';
import { IconCardConfig } from '../../shared/models/icon-card.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  @Input() config: IconCardConfig[] = [];

  public mapCenter: google.maps.LatLngLiteral = {
    lat: 39.69160123918867, 
    lng: -104.98708204374248,
  };
  public mapOptions: google.maps.ImageMapTypeOptions = {};

  public mapMarkerPosition: google.maps.LatLngLiteral = this.mapCenter;
  public mapMarkerTitle = 'South Broadway and Arkansas Ave';
  public mapMarkerOptions = {}

  // @TODO how to tie this to CSS dimensions?
  public cardDimensions$ = this.viewportService.viewportState$.pipe(
    map(viewportState => {      
      switch(viewportState.currentBreakpoint) {
        case 'zero': // fall through 
        case 'min': this.cardWidth = '86vw'; this.cardHeight = '11vw'; break;
        case 'xs':  this.cardWidth = '66vw'; this.cardHeight = '11vw'; break;
        case 'sm':
        case 'md': this.cardWidth = '25.5vw'; this.cardHeight = '17vw'; break;
        case 'lg':
        case 'xl':
        case 'ws':
        case 'hd': this.cardWidth = '22vw'; this.cardHeight = '15vw'; break;
        default: this.cardWidth = '24vw'; this.cardHeight = '17vw';
      };
      console.log('+++++ ', this.cardWidth, this.cardHeight);
      return { width: this.cardWidth, height: this.cardHeight };
    })
  );

  private cardWidth = '22vw';
  private cardHeight = '15vw';

  constructor(public viewportService: ViewportService) { }

  ngOnInit(): void {
    
  }

  public mapClick(event: MouseEvent) {
    event.stopPropagation(); // allow clicking on map w/o flipping card
  }
}
