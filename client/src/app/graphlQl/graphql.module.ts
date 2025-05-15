import { NgModule, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context'; // ✅ Fix lỗi ở đây

@NgModule({
  providers: [
    provideHttpClient(),

    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const http = httpLink.create({ uri: 'http://localhost:3000/graphql' });

      // ✅ Gắn token vào HTTP header
      const auth = setContext(() => {
        const token = localStorage.getItem('token');
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : ''
          }
        };
      });

      // ✅ WebSocket subscription link
      const ws = new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:3000/graphql',
          connectionParams: () => {
            const token = localStorage.getItem('token');
            return {
              Authorization: token ? `Bearer ${token}` : ''
            };
          }
        })
      );

      // ✅ Gộp subscription và HTTP
      const link = split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return def.kind === 'OperationDefinition' && def.operation === 'subscription';
        },
        ws,
        auth.concat(http) // 👉 auth middleware gắn token + HTTP
      );

      return {
        link,
        cache: new InMemoryCache(),
      };
    }),
  ],
})
export class GraphQLModule {}
