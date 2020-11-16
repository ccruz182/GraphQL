import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

import _ from "lodash";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return [...database.estudiantes];
    },
    estudiante(__: void, { id }): any {
      const resultado = _.filter(database.estudiantes, ["id", id])[0];
      if (resultado) {
        return resultado;
      }

      return {
        id: -1,
        name: `No se encontró estudiante con id=${id}`,
        email: "",
        website: "",
        courses: [],
      };
    },

    cursos(): any {
      return [...database.cursos];
    },

    curso(__: void, { id }): any {
      const resultado = _.filter(database.cursos, ["id", id])[0];
      if (resultado) {
        return resultado;
      }

      return {
        id: -1,
        title: `No se encontró curso con id=${id}`,
        description: "",
        clases: 0,
        time: 0,
        level: "",
        logo: "",
        path: "",
        teacher: "",
        reviews: []
      };
    },
  },
};

export default query;
