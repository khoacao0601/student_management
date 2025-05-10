// graphql.modules.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { inject, NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import {
  InMemoryCache,
  split,
  ApolloClientOptions,
  HttpLink as ApolloHttpLink,
  // getMainDefinition is imported from utilities
} from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from '../app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideApollo((): ApolloClientOptions<any> => {
      const http = inject(HttpLink).create({
        uri: 'http://localhost:3000/graphql',
      });

      const ws = new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:3000/graphql',
          // add headers if needed
          // connectionParams: () => ({ Authorization: localStorage.getItem('token') })
        })
      );

      // split: if operation is subscription will go WS, then go with HTTP
      const link = split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === 'OperationDefinition' &&
            def.operation === 'subscription'
          );
        },
        ws,
        http
      );

      return {
        link,
        cache: new InMemoryCache(),
      };
    }),
  ],
});
