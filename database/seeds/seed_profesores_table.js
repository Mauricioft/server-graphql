const casual = require('casual')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profesores').del().then(() => {
    // Inserts seed entries
    const promise = Array(10).fill().map((_, i) => {
      return knex('profesores').insert([{
        id: i + 1, 
        nombre: casual.name,
        nacionalidad: casual.country,
        genero: casual.random_element(['MASCULINO', 'FEMENINO'])
      }])
    })
    return Promise.all(promise)
  })
}
