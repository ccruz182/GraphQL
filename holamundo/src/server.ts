import express from "express";
import compression from "compression";
import cors from "cors";
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from "graphql";
import { graphqlHTTP } from 'express-graphql';

const app = express();
app.use("*", cors());

app.use(compression());

const typeDefs = `
  type Query {
    hola: String!
    holaAmigo(nombre: String!): String!
  }
`;

const resolvers: IResolvers = {
  Query: {
    hola(): string { 
      return 'Hola Mundo';
    },
    holaAmigo(__: void, { nombre }): string { 
      return `Hola ${nombre}`;
    }
  }
}

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);


app.listen(4000);
