import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlbumDisplayComponent } from './album-display/album-display.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  declarations: [
    AlbumDisplayComponent,
    ImageDisplayComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    AlbumDisplayComponent,
  ]  
})
export class SharedComponentsModule { }
