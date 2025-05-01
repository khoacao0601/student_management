import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import app from './index.js';
import { schema } from './graphql/index.js';

import { ApolloServer } from 'apollo-server-express';

const server = createServer(app);


// Implement WebSocket server on the same http server
const wsServer = new WebSocketServer({
  server,
  path: '/graphql',
});

// connect graphql-ws with WebSocketServer
useServer({ schema }, wsServer as any);

// Apollo server for query/mutation
const apolloServer = new ApolloServer({
  schema,
  introspection: true, // ✅ allow query schema
  plugins: [
    // ✅ turn on GraphQL Playground
    await import('apollo-server-core').then(({ ApolloServerPluginLandingPageGraphQLPlayground }) =>
      ApolloServerPluginLandingPageGraphQLPlayground()
    )
  ]
});

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT ?? 3000;
  server.listen(PORT, () => {
    console.log(`🚀 GraphQL ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    console.log(`📡 Subscriptions ready at ws://localhost:${PORT}/graphql`);
  });
}

start(); // ✅ to start server



//Start the server
//const PORT = process.env.PORT ?? 3000;

// app.listen(PORT, () => {;
//  console.log(`🚀 Server 111 is running at http://localhost:${PORT}`);
// });