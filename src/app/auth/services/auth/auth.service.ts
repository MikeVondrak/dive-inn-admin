import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Observable, of } from 'rxjs';
import { map, filter, first, tap, mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated: boolean = false;
  public authenticated$: Observable<boolean> = this.afAuth.authState.pipe(
    map((authState) => !!authState)
  );
  public uid$: Observable<string | undefined> = this.afAuth.authState.pipe(map(authState => authState?.uid));
  public user$: Observable<firebase.User | null> = this.afAuth.authState;
  public username$: Observable<string> = this.user$.pipe(
    map((user: firebase.User | null) => user?.displayName ? user.displayName : 'Unknown User'));

    
  token$: Observable<string> = this.afAuth.idTokenResult.pipe(
    filter((authState) => !!authState),
    first(),
    map((idToken) => idToken ? idToken.token : '')
  );

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((authState) => {
      if (authState) {                
        this.afAuth.idTokenResult
          .pipe(
            first(),
            tap((token) => {
              if (!!token) {
                const expires =
                  new Date(token.expirationTime).toLocaleDateString() +
                  ' ' +
                  new Date(token.expirationTime).toLocaleTimeString();
              }
            })
          )
          .subscribe((token) => {
            this.authenticated = true;
            localStorage.setItem('accessToken', token ? JSON.stringify(token) : '');
          });
      } else {
        this.authenticated = false;
        localStorage.removeItem('accessToken');
      }
    });
  }

  public loginGoogle(): void { // Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider)
      .then(userCreds => {
        this.router.navigateByUrl('admin');
      })
    .catch(err => {
      // will error if popup is closed then re-opened, can still proceed
    });
  }

  logout() {
    this.afAuth.signOut()
      .then(() => this.router.navigateByUrl('login'))
      .catch((err) => this.router.navigateByUrl('login'));

  }

  public getAllowedUser(): Observable<boolean> {
    return this.uid$.pipe(
      mergeMap(uid => {
        const coll = firebase.firestore().collection('allow_users');
        const docRef = coll.doc(uid);
        return docRef.get();
      }),
      map(doc => {
        return doc.exists;
      }),
      catchError(err => {
        console.log('ALLOWED USER ERROR: ' + err)
        return of(false);
      })
    );
  }
}
