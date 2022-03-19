import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlbumDisplayComponent } from './album-display/album-display.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { MouseFacerComponent } from './mouse-facer/mouse-facer.component';

@NgModule({
  declarations: [
    AlbumDisplayComponent,
    ImageDisplayComponent,
    MouseFacerComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    AlbumDisplayComponent,
    ImageDisplayComponent,
    MouseFacerComponent,
  ]  
})
export class SharedComponentsModule { }
