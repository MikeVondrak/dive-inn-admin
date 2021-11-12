import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumAssignerComponent } from './components/album-assigner/album-assigner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumAssignerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
