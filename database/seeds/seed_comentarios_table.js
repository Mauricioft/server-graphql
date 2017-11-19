const casual = require('casual')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('comentarios').del().then(() => {
    // Inserts seed entries
    const promise = Array(40).fill().map((_, i) => {
      return knex('comentarios').insert([{
        id: i + 1, 
        nombre: casual.title,
        cuerpo: casual.description,
        curso_id: casual.integer(1, 10),
      }])
    })
    return Promise.all(promise)
  })
}
