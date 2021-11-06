import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const uri = 'https://concrete-hookworm-64.hasura.app/v1/graphql'; // <-- add the URL of the GraphQL server here
const headers = new HttpHeaders({
  'x-hasura-admin-secret': environment.hasuraConfig.gql_admin_secret
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri,
      headers,
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
