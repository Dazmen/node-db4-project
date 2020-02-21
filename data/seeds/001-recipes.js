
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'PB&J Sandwich', description:'snack'},
        { name: 'Scrambled eggs', description:'breakfast'},
        { name: 'Grilled Cheese', description:'lunch'}
      ]);
    });
};
