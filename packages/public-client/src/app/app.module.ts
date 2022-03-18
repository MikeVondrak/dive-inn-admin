import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { FeatureComponentsModule } from './components/features/feature-components.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    //CommonModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    FeatureComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
