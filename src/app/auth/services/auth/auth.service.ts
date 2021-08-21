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
        
        console.log(authState.uid);
        
        this.afAuth.idTokenResult
          .pipe(
            first(),
            tap((token) => {
              if (!!token) {
                // console.log(token.token);
                const expires =
                  new Date(token.expirationTime).toLocaleDateString() +
                  ' ' +
                  new Date(token.expirationTime).toLocaleTimeString();
                console.log(`token expires:`, expires);
              }
            })
          )
          .subscribe((token) => {
            this.authenticated = true;
            console.log(token);
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
        console.log('ALLOW USERS MERGEMAP: ' + uid);
        return docRef.get();
      }),
      map(doc => {
        console.log('DOC EXISTS: ' + doc.exists);
        return doc.exists;
      }),
      catchError(err => {
        console.log('ALLOWED USER ERROR: ' + err)
        return of(false);
      })
    );
  }
}
