import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    hola(): string {
      return "Hola Mundo";
    },
    holaAmigo(__: void, { nombre }): string {
      return `Hola ${nombre}`;
    },
  },
};

export default query;