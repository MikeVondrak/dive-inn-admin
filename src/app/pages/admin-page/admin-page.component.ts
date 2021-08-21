 import { Component, OnInit } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public username$: Observable<string> = of('');
  public allowedUser$: Observable<boolean> = this.authService.getAllowedUser()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username$ = this.authService.user$.pipe(
      map((user: firebase.User | null) => user?.displayName ? user.displayName : 'Unknown User')
    ); 
  }

}
