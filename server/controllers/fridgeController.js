const db = require('../models/dbModel');

const fridgeController = {};

fridgeController.getFridge = async (req, res, next) => {
  console.log('i am getRecipe middleware');
  const { user_id } = req.params;
  const query = `SELECT ingredient from Fridge WHERE user_id = '${user_id}'`;
  try {
    const ingredients = await db.query(query);
    console.log('i am ingredients', ingredients)
    res.locals.fridge = ingredients;
    return next();
  }
  catch (err) {
    return next({
      log: `fridgeController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in fridgeController.getFridge middleware',
      },
    });
  }
};

fridgeController.addIngredient = async (req, res, next) => {
  console.log('i am addRecipe middleware');
  const { user_id, ingredients } = req.body;
  for (let i = 0; i < ingredients.length; i++) {
    `INSERT INTO Fridge (user_id, ingredient_id, ingredient) VALUES(${user_id}, ${i}, '${ingredients[i]}')`;
  }
  // const userFridge = `INSERT INTO Fridge (user_id, ingredient) VALUES(${user_id}, '${ingredient}')`;
  try {
    const ingredients = await db.query(`SELECT * from Fridge WHERE user_id = '${user_id}'`);
    console.log('i am ingredients', ingredients)
    res.locals.ingredient = ingredients;
    return next();
  }
  catch (err) {
    return next({
      log: `fridgeController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in fridgeController.addIngredient middleware',
      },
    });
  }
};

// fridgeController.deleteIngredient = async (req, res, next) => {};

module.exports = fridgeController;