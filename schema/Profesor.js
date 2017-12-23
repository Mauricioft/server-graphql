module.exports = `
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
`;