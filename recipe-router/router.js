const express = require('express');
const Recipes = require('./helpers');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json({recipes})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not retrieve recipes'})
        })
});
router.get('/:id/shoppinglist', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            console.log(list);
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not retrieve list'})
        })
});

module.exports = router;