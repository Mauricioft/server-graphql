const { makeExecutableSchema, addMockFunctionsToSchema  } = require('graphql-tools');
const casual = require('casual');

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
    cursos: () => {
      return [{
        id: 1,
        titulo: 'Curso de GraphQL',
        descripcion: 'Aprendiendo GraphQL'
      },{
        id: 2,
        titulo: 'Curso de PHP',
        descripcion: 'Aprendiendo PHP'
      }]
    } 
  },
  Curso: {
    profesor: () => {
      return {
        nombre: 'Mauricio Flor',
        nacionalidad: 'Colombia'
      }
    },
    comentarios: () => {
      return [{
        nombre: 'Juan',
        cuerpo: 'Buen Video!'
      }, {
        nombre: 'Wilson',
        cuerpo: 'Buen Video!'
      }]
    }
  }
};

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ 
  schema, 
  mocks: {
    Curso: () => {
      return {
        id: casual.uuid,
        titulo: casual.title,
        descripcion: casual.description
      }
    },
    Profesor: () => {
      return {
        id: casual.uuid,
        nombre: casual.name,
        telefono: casual.phone,
        nacionalidad: casual.country
      }
    }
  },
  preserveResolvers: false
});

module.exports = schema;