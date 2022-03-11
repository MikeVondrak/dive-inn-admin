import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumAssignerComponent } from './components/album-assigner/album-assigner.component';
import { FormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular';

import { GeneratedModule } from '../../../../../../generated/generated.module';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumAssignerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlbumsRoutingModule,
    ApolloModule,
    GeneratedModule,
  ]
})
export class AlbumsModule { }
