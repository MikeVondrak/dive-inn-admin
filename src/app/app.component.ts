import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { headerAnimations } from './animations/header.animations';
import { AuthService } from './auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [headerAnimations]
})
export class AppComponent {
  
  public isAuthenticated$: Observable<boolean> = this.authService.authenticated$;
  public isAllowed$: Observable<boolean> = this.authService.getAllowedUser();
  
  public testIsAllowed: boolean = false;
  public testIsAllowed$: Subject<boolean> = new Subject();
  public headerAnimationState$: Observable<string> = this.isAuthenticated$.pipe(map(isAllowed => isAllowed ? 'allowed' : 'notAllowed'));

  public username$: Observable<string> = this.authService.username$;

  constructor(private authService: AuthService) {
    this.testIsAllowed$.next(false);
  }

  public logout() {
    // this.authService.logout();
    this.testIsAllowed = !this.testIsAllowed;
    this.testIsAllowed$.next(this.testIsAllowed);

    this.authService.logout();
  }
}
