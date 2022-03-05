import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { headerAnimations } from './animations/header.animations';
import { AuthService } from './auth/services/auth/auth.service';
import { dataModifiedVar } from './graphql.module';
import dotenv from 'dotenv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [headerAnimations]
})
export class AppComponent implements OnInit {
  
  public isAuthenticated$: Observable<boolean> = this.authService.authenticated$;
  public isAllowed$: Observable<boolean> = this.authService.getAllowedUser();
  
  public headerAnimationState$: Observable<string> = this.isAuthenticated$.pipe(map(isAllowed => isAllowed ? 'allowed' : 'notAllowed'));
  public username$: Observable<string> = this.authService.username$;
  
  constructor(
    private authService: AuthService,
  ) {
    dotenv.config();
    console.log('App start, env: ' + process.env);
  }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

  public save() {
    localStorage.setItem('dataModified', 'false');
    dataModifiedVar(false);
  }
}
