import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { FeatureComponentsModule } from './components/features/feature-components.module';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { DirectivesModule } from './directives/directives.module';
import { PagesModule } from './components/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InsideComponent } from './components/pages/inside/inside.component';
import { FindUsComponent } from './components/pages/find-us/find-us.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    // InsideComponent,
    // FindUsComponent, 
    // MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    DirectivesModule,
    FeatureComponentsModule,
    SharedComponentsModule,
    PagesModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
