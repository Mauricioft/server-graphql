
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comentarios', (table) => {
      table.increments('id').primary().unsigned();
      table.string('nombre');
      table.string('cuerpo');
      table.integer('curso_id').unsigned();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => console.log('Comentarios Table is Created!'))
    .catch((err) => console.log('Table Comentarios not Created => ', err))
  ])  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comentarios')
  ])  
};
