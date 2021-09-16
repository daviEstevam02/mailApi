exports.up = (knex) => {
    return knex.schema.createTable('users', (table) =>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('cpf').notNullable();
    });
}
exports.down = (knex) => {
    return knex.schema.dropTable('users')
}