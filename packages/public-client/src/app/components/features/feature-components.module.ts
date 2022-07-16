import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    ContactSectionComponent
  ],
  imports: [
    CommonModule, 
    SharedComponentsModule, 
    GoogleMapsModule
  ],
  exports: [    
    ContactSectionComponent,
  ]
})
export class FeatureComponentsModule { }
