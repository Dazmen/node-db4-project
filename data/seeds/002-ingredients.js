
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Peanut Butter'},
        { name: 'Jelly'},
        { name: 'Bread'},
        { name: 'Eggs'},
        { name: 'Black Pepper'},
        { name: 'Salt'},
        { name: 'Butter'},
        { name: 'American Cheese'}
      ]);
    });
};
