import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

import { AlbumDisplayComponent } from './album-display/album-display.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { MouseFacerComponent } from './mouse-facer/mouse-facer.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { MouseFacerCardComponent } from './mouse-facer-card/mouse-facer-card.component';
import { MouseFacerTitleCardComponent } from './mouse-facer-title-card/mouse-facer-title-card.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AlbumDisplayComponent,
    ImageDisplayComponent,
    MouseFacerComponent,
    IconCardComponent,
    MouseFacerCardComponent,
    MouseFacerTitleCardComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    GoogleMapsModule,
  ],
  providers: [],
  exports: [
    AlbumDisplayComponent,
    ImageDisplayComponent,
    MouseFacerComponent,
    IconCardComponent,
    MouseFacerCardComponent,
    MouseFacerTitleCardComponent,
  ]  
})
export class SharedComponentsModule { }
