import { IResolvers } from "graphql-tools";

import mutation from "./mutation";
import query from "./query";
import type from "./type";

const resolverMap: IResolvers = {
  ...query,
  ...mutation,
  ...type
};

export default resolverMap;
