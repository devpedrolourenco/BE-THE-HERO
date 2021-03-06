
/**
 * Metodo UP e responsavel pela criacao da tabela, o que vai acontecer quando executar a migration.
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

/**
 * Metodo Down ele ira dizer o que faremos caso de um error
 */
exports.down = function(knex) {
  return knext.schema.dropTable('ongs');
};
