import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { EmailPageComponent } from './pages/email-page/email-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV7hD9iOJD_XMVsd8uU88g63ap-8_r7jI",
  authDomain: "diveinnadmin.firebaseapp.com",
  projectId: "diveinnadmin",
  storageBucket: "diveinnadmin.appspot.com",
  messagingSenderId: "100135443835",
  appId: "1:100135443835:web:1ae5f4d17bda5ffa9631de",
  measurementId: "G-W25N2VK7PZ"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    EmailPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
