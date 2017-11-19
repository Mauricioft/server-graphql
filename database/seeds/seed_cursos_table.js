const casual = require('casual')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('cursos').del().then(() => {
    // Inserts seed entries
    const promise = Array(10).fill().map((_, i) => {
      return knex('cursos').insert([{
        id: i + 1, 
        titulo: casual.title,
        descripcion: casual.description,
        profesor_id: casual.integer(1, 10),
        rating: casual.double(1, 5),
      }])
    })
    return Promise.all(promise)
  })
}
