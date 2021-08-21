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
  public allowedUser$: Observable<boolean> = of(false);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username$ = this.authService.user$.pipe(
      map((user: firebase.User | null) => user?.displayName ? user.displayName : 'Unknown User')
    );

    this.allowedUser$ = this.authService.uid$.pipe(
      mergeMap(uid => {
        const coll = firebase.firestore().collection('allow_users');
        const docRef = coll.doc(uid);
        console.log('ALLOW USERS MERGEMAP: ' + uid);
        return docRef.get();
      }),
      map(doc => {
        console.log('DOC EXISTS: ' + doc.exists);
        return doc.exists;
      }),
      catchError(err => {
        console.log('ALLOWED USER ERROR: ' + err)
        return of(err);
      })
    );   

  }

}
