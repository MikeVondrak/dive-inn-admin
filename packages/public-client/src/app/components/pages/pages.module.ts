import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitePartsModule } from './_parts/site-parts.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { FeatureComponentsModule } from '../features/feature-components.module';

import { HomeComponent } from './home/home.component';
import { InsideModule } from './inside/inside.module';
import { MenuModule } from './menu/menu.module';
import { FindUsModule } from './find-us/find-us.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, 
    SitePartsModule,
    SharedComponentsModule,
    FeatureComponentsModule,
    InsideModule,
    MenuModule,
    FindUsModule,
  ],
  exports: [
    SitePartsModule,
    SharedComponentsModule,
    FeatureComponentsModule,
  ]
})
export class PagesModule { }
