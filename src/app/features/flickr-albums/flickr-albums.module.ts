import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlickrAlbumsRoutingModule } from './flickr-albums-routing.module';
import { FlickrAlbumsComponent } from './flickr-albums.component';


@NgModule({
  declarations: [
    FlickrAlbumsComponent
  ],
  imports: [
    CommonModule,
    FlickrAlbumsRoutingModule
  ]
})
export class FlickrAlbumsModule { }
