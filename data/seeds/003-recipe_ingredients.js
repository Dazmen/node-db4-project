
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, 
          instruction: 'spread pb on bread', 
          ingredient_id: 1, 
          ingredient_quantity: '1tbs'
        },
        { recipe_id: 1, 
          instruction: 'spread jelly on bread', 
          ingredient_id: 2, 
          ingredient_quantity: '1tbs'
        },
        { recipe_id: 1, 
          instruction: 'grab two slices of bread', 
          ingredient_id: 3, 
          ingredient_quantity: '2 slies'
        },

        { recipe_id: 2, 
          instruction: 'beat eggs in bowl', 
          ingredient_id: 4, 
          ingredient_quantity: '3 eggs'
        },
        { recipe_id: 2, 
          instruction: 'add a pnich to taste', 
          ingredient_id: 5, 
          ingredient_quantity: 'pinch'
        },
        { recipe_id: 2, 
          instruction: 'add a pnich to taste', 
          ingredient_id: 6, 
          ingredient_quantity: 'pinch'
        },

        { recipe_id: 3, 
          instruction: 'heat pan with butter', 
          ingredient_id: 7, 
          ingredient_quantity: 'tbs'
        },
        { recipe_id: 3, 
          instruction: 'place bread in heated pan coated in butter', 
          ingredient_id: 3, 
          ingredient_quantity: '2 slices'
        },
        { recipe_id: 3, 
          instruction: 'add cheese to bread, close with the other slice of bread and flip', 
          ingredient_id: 8, 
          ingredient_quantity: ' 2 slices'
        },

      ]);
    });
};
