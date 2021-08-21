import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, filter, first, tap } from 'rxjs/operators';

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

  constructor(private afAuth: AngularFireAuth) {
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

  public loginGoogle(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.signOut();
  }
}
