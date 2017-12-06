const { makeExecutableSchema, addMockFunctionsToSchema  } = require('graphql-tools');
const casual = require('casual');
const Curso = require('./app/Curso');
const Profesor = require('./app/Profesor');

const typeDefs = `
  type Curso {
    id: ID!
    titulo: String!
    descripcion: String!
    profesor: Profesor
    rating: Float @deprecated(reason: "We do not believe in scores anymore")
    # Rating Estará deprecate
    comentarios: [Comentario]
  }

  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    telefono: String!
    genero: Genero
    cursos: [Curso]
  }

  enum Genero {
    MASCULINO
    FEMENINO
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }

  # Aqui se definen los endpoint de la aplicacion
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`;
 
const resolvers = {
  Query: {
    cursos: () => Curso.query().eager('[profesor, comentarios]'),
    profesores: () => Profesor.query(),
    curso: (rootValue, args) => Curso.query(),
    profesor: (rootValue, args) => Profesor.query()
  },
}

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ 
  typeDefs, 
  resolvers
});

module.exports = schema;