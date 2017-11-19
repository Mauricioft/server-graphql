
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('profesores', (table) => {
      table.increments('id').primary().unsigned();
      table.string('nombre');
      table.string('nacionalidad');
      table.string('genero');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => console.log('Profesores Table is Created!'))
    .catch((err) => console.log('Table Profesores not Created => ', err))
  ])    
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profesores')
  ])    
};
