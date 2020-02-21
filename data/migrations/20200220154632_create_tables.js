
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
        tbl.increments('id');

        tbl.string('name')
            .notNullable()
            .unique();
        
        tbl.string('description');
  })

  .createTable('ingredients', tbl => {
        tbl.increments('id');

        tbl.string('name')
            .unique()
            .notNullable();
  })

  .createTable('recipe_ingredients', tbl => {
        tbl.increments('id');

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes');

        tbl.string('instruction')
            .notNullable();

        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('ingredients');

        tbl.string('ingredient_quantity')
            .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
