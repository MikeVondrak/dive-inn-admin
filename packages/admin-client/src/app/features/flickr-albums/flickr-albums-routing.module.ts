import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlickrAlbumsComponent } from './flickr-albums.component';

const routes: Routes = [{ path: '', component: FlickrAlbumsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlickrAlbumsRoutingModule { }
