const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRouter = express.Router();

recipeRouter.get('/:id',
  recipeController.getRecipes,
  (req, res) => {
    console.log('I am in GET recipeRouter')
    res.status(200).json(res.locals.recipes);
  }
);

// recipeRouter.post('/',
//   recipeController.saveRecipe,
//   (req, res) => {
//     res.status(201).json(res.locals.recipe)
//   }
// );

// recipeRouter.delete('/',
//   recipeController.deleteRecipe,
//   (req, res) => {
//     res.status(201).json(res.locals.recipe)
//   }
// );

module.exports = recipeRouter;