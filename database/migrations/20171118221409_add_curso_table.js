
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('cursos', (table) => {
      table.increments('id').primary().unsigned();
      table.string('titulo');
      table.string('descripcion');
      table.integer('profesor_id').unsigned();
      table.string('genero');
      table.double('rating').unsigned();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => console.log('Cursos Table is Created!'))
    .catch((err) => console.log('Table Cursos not Created => ', err))
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('cursos')
  ])
};
