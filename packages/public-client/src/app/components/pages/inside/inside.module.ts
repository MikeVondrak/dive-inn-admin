import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideRoutingModule } from './inside.routing.module';
import { InsideComponent } from './inside.component';
import { SharedComponentsModule } from '../../shared/shared-components.module';

@NgModule({
  declarations: [
    InsideComponent,
  ],
  imports: [
    CommonModule,
    InsideRoutingModule,
    SharedComponentsModule,
  ],
  exports: [
    InsideComponent,
  ]
})
export class InsideModule { }
