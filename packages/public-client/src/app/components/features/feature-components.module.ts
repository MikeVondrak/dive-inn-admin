import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicSectionComponent } from './topic-section/topic-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    TopicSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    CommonModule, 
    SharedComponentsModule, 
    GoogleMapsModule
  ],
  exports: [
    TopicSectionComponent,
    ContactSectionComponent,
  ]
})
export class FeatureComponentsModule { }
