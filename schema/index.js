const { makeExecutableSchema, addMockFunctionsToSchema  } = require('graphql-tools');
const resolvers = require('../resolvers');
const Profesor = require('./Profesor');
const Curso = require('./Curso');

const rootQuery = `  
  # Aqui se definen los endpoint de la aplicacion
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`;

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ 
  typeDefs: [rootQuery, Profesor, Curso], 
  resolvers
});

module.exports = schema;