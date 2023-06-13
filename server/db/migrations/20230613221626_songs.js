/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.string('producer')
    table.string('album')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('songs')
}
