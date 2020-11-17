import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const mutation: IResolvers = {
  Mutation: {
    agregarCurso(__: void, { curso }): any {
        if (database.cursos.find(c => c.title === curso.title)) {
            return {
                ... curso,
                id: -1,
                title: `El título <${curso.title}> ya se encuentra en uso.`,
                reviews: [],
                students: []
            }
        }

        const itemCurso = {
            id: String(database.cursos.length + 1),
            students: [],
            reviews: [],
            ... curso
        };        
        
        database.cursos.push(itemCurso);

        return itemCurso;
    },

    modificarCurso(__: void, { curso }): any {
        if (! database.cursos.find(c => c.id === curso.id)) {
            return {
                ... curso,
                id: -1,
                title: `No existe un curso con el id=${curso.id}`,
                reviews: [],
                students: []
            }
        }

        database.cursos[curso.id - 1] = {... curso};
        return database.cursos[curso.id - 1];
    },

    eliminarCurso(__: void, { id }): any {
        if (!database.cursos.find(c => c.id === id)) {
            return {
                id: -1,
                title: `No existe un curso con el id=${id}`,
                reviews: [],
                students: []
            }
        }

        const retrievedCourse = database.cursos.find(c => c.id === id);
        database.cursos.splice(id - 1, 1);

        return {
            ... retrievedCourse,
            id: -1,
            title: `El curso con título <${retrievedCourse?.title}> fue eliminado satisfactoriamente.`
        }
    }
  },
};

export default mutation;
