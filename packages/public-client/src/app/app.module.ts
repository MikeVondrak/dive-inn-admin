import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { FeatureComponentsModule } from './components/features/feature-components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { DirectivesModule } from './directives/directives.module';
import { PagesModule } from './components/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
