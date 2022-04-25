import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './_parts/site-footer/site-footer.component';
import { SiteHeaderComponent } from './_parts/site-header/site-header.component';
import { SiteNavComponent } from './_parts/site-nav/site-nav.component';

@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteNavComponent,
    SiteFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteHeaderComponent,
    SiteNavComponent,
    SiteFooterComponent,
  ]
})
export class PagesModule { }
