
exports.up = function (knex)  {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary();
    table.string('name', 50).notNullable();
    table.string('email', 50).notNullable();
    table.string('whatsapp', 14).notNullable();
    table.string('city', 25).notNullable();
    table.string('state', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
