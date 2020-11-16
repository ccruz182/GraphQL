import { graphql, GraphQLSchema } from "graphql";

import 'graphql-import-node';
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from './schema.graphql';
import resolvers from '../resolvers/resolverMap';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs, resolvers
});

export default schema;