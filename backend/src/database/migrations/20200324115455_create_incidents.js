
exports.up = function(knex) {
    return knex.schema.crateTable('incidents', function (table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //relacionamento entre tabelas
        table.string('ong_id').notNullable();

        //fazer uma chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs')
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
    
  
};
