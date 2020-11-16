import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';

import schema from './schema';

const app = express();

app.use('*', cors());
app.use(compression());

const apolloServer = new ApolloServer({
    schema,
    introspection: true
});

apolloServer.applyMiddleware({app});

app.get('/', expressPlayGround({endpoint: '/graphql'}));

const httpServer = createServer(app);
httpServer.listen({port: 5500}, () => console.log("Server is up"));