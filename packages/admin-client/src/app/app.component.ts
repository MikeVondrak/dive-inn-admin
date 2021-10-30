import { Component, OnInit } from '@angular/core';
import { ApolloCache, ApolloClientOptions } from '@apollo/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
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
export class AppComponent implements OnInit {
  
  public isAuthenticated$: Observable<boolean> = this.authService.authenticated$;
  public isAllowed$: Observable<boolean> = this.authService.getAllowedUser();
  
  public headerAnimationState$: Observable<string> = this.isAuthenticated$.pipe(map(isAllowed => isAllowed ? 'allowed' : 'notAllowed'));
  public username$: Observable<string> = this.authService.username$;

  private queryRef: QueryRef<any>;

  constructor(
    private authService: AuthService,
    private apolloService: Apollo
  ) {
    console.log('App start');





    

    const queryObject = gql`
      query {
        photo_size {
          height
          label
          source
          media
          width
        }
      }
    `;

    this.queryRef = this.apolloService.watchQuery({
      query: queryObject,
      variables: {}
    });

    this.queryRef.valueChanges.subscribe(result => {
      console.log('APOLLO GQL QUERY!!!!!  ', {result});
    })
  }

  ngOnInit() {

  }

  public logout() {
    this.authService.logout();
  }
}
