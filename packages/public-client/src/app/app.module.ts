import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { FeatureComponentsModule } from './components/features/feature-components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    DirectivesModule,
    FeatureComponentsModule,
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
