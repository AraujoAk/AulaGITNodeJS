/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('professores', function(table){
    table.increments('id').primary()  
    table.string('nome')
    table.string('email')
    table.string('telefone')
    table.date('nascimento')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('professores')

};
