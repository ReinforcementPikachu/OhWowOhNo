const express = require('express');
const fridgeController = require('../controllers/fridgeController');

const fridgeRouter = express.Router();

// fridgeRouter.get('/',
//   fridgeController.getFridge,
//   (req, res) => {
//     console.log('I am in the GET fridgeRouter')
//     res.status(200).json(res.locals.fridge);
//   }
// );

// fridgeRouter.post('/',
//   fridgeController.addIngredient,
//   (req, res) => {
//     console.log('I am in the POST fridgeRouter')
//     res.status(200).json(res.locals.ingredient);
//   }
// );

// fridgeRouter.delete('/',
//   fridgeController.deleteIngredient,
//   (req, res) => {
//     // console.log('I am in the fridgeRouter')
//     res.status(200).json(res.locals.ingredient);
//   }
// );

module.exports = fridgeRouter;