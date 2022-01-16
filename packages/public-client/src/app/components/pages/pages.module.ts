import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './inside.routing.module';


@NgModule({
  declarations: [
    InsideComponent,
  ],
  imports: [
    CommonModule,
    InsideRoutingModule,
  ],
  exports: [
    InsideComponent,
  ]
})
export class InsideModule { }
