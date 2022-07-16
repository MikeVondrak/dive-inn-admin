import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GoogleMapsModule } from '@angular/google-maps';

import { SharedComponentsModule } from '../../shared/shared-components.module';
import { SitePartsModule } from '../_parts/site-parts.module';

import { FindUsComponent } from './find-us.component';

const routes: Routes = [
  { path: '', component: FindUsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [FindUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    SitePartsModule,
    GoogleMapsModule
  ],
  exports: [FindUsComponent]
})
export class FindUsModule { }
