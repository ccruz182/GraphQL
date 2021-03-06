import express from "express";
import compression from "compression";
import cors from "cors";

import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

import schema from "./schema";

const app = express();
app.use("*", cors());

app.use(compression());

const server = new ApolloServer({ schema, introspection: true });
server.applyMiddleware({ app });

const httpServer = createServer(app);
const port = 4000;
httpServer.listen({port});
