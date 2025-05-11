// src/app/graphql.module.ts

import { NgModule, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

@NgModule({
  providers: [
    provideHttpClient(), // Thay thế HttpClientModule

    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const http = httpLink.create({
        uri: 'http://localhost:3000/graphql',
      });

      const ws = new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:3000/graphql',
          // connectionParams: () => ({
          //   Authorization: localStorage.getItem('token') || '',
          // }),
        })
      );

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
})
export class GraphQLModule {}
