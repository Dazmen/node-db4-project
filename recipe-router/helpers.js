const db = require('../data/db-config.js');
module.exports = {
    getRecipes,
    getShoppingList,
};
function getRecipes(){
    return db('recipes')
};
function getShoppingList(recipe_id){
    return db('recipe_ingredients')
        .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .select('recipes.name as recipe',
            'ingredients.name as ingredient',
            'recipe_ingredients.ingredient_quantity')
        .where({ recipe_id: recipe_id})
};