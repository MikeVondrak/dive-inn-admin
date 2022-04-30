import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside/inside.routing.module';
import { SitePartsModule } from './_parts/site-parts.module';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { FeatureComponentsModule } from '../features/feature-components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    InsideRoutingModule, 
    SharedComponentsModule,
    SitePartsModule,
    FeatureComponentsModule,
  ],
  exports: [
    SitePartsModule,
    SharedComponentsModule,
    FeatureComponentsModule,
  ]
})
export class PagesModule { }
