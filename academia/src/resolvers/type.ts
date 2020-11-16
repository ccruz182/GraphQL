import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const type: IResolvers = {
  Estudiante: {
    courses: (parent) => {
      const cursosList: Array<any> = [];
      parent.courses.map((course: string) => {
        cursosList.push(_.filter(database.cursos, ["id", course])[0]);
      });

      return cursosList;
    },
  },
  Curso: {
    level: (parent) => {
      if (parent.level === "ALL") return "TODOS";
      else if (parent.level === "MEDIUM") return "INTERMEDIO";
      else return "TODOS";
    },
  },
};

export default type;
