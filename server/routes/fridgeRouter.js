const express = require('express');
const fridgeController = require('../controllers/fridgeController');

const fridgeRouter = express.Router();

fridgeRouter.get('/:id',
  fridgeController.getFridge,
  (req, res) => {
    // console.log('I am in the GET fridgeRouter')
    res.status(200).json(res.locals.fridge);
  }
);

fridgeRouter.post('/',
  fridgeController.addIngredient,
  (req, res) => {
    // console.log('I am in the POST fridgeRouter')
    res.status(200).json(res.locals.ingredient);
  }
);

module.exports = fridgeRouter;