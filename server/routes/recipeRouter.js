const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRouter = express.Router();

// recipeRouter.get('/recipe',
//   recipeController.saveRecipe,
//   (req, res) => {
//     // console.log('I am in the recipeRouter')
//     res.status(200).json(res.locals.recipe);
//   }
// );

// recipeRouter.post('/recipe',
//   recipeController.saveRecipe,
//   (req, res) => {
//     res.locals.message = 'recipe saved!'
//     res.status(201).json(res.locals.message)
//   }
// );

// recipeRouter.delete('/recipe',
//   recipeController.deleteRecipe,
//   (req, res) => {
//     res.locals.message = 'recipe deleted!'
//     res.status(201).json(res.locals.message)
//   }
// );

module.exports = recipeRouter;