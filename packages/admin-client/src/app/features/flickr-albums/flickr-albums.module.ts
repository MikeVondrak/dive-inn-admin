import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlickrAlbumsRoutingModule } from './flickr-albums-routing.module';
import { FlickrAlbumsComponent } from './flickr-albums.component';
import { PhotoSetListComponent } from './components/photo-set-list/photo-set-list.component';
import { PhotoSetPreviewComponent } from './components/photo-set-preview/photo-set-preview.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';


@NgModule({
  declarations: [
    FlickrAlbumsComponent,
    PhotoSetListComponent,
    PhotoSetPreviewComponent,
    PhotoPreviewComponent
  ],
  imports: [
    CommonModule,
    FlickrAlbumsRoutingModule
  ]
})
export class FlickrAlbumsModule { }
