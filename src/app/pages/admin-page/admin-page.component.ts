import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import firebase from 'firebase/app';

import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public username$: Observable<string> = of('');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username$ = this.authService.user$.pipe(map((user: firebase.User | null) => user ? user.displayName ? user.displayName : 'Unknown User' : 'Unknown User'));
  }

}
