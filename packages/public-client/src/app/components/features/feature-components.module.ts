import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicSectionComponent } from './topic-section/topic-section.component';



@NgModule({
  declarations: [
    TopicSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopicSectionComponent
  ]
})
export class FeatureComponentsModule { }
