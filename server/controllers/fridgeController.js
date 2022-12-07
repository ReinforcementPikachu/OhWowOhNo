const db = require('../models/dbModel');

const fridgeController = {};

fridgeController.getFridge = async (req, res, next) => {
  // console.log('i am getRecipe middleware');
  const { id } = req.params;
  //need to send back in array
  const query = `SELECT ingredient from Fridge WHERE user_id = '${id}'`;
  try {
    const ingredients = await db.query(query);
    const rows = ingredients.rows;
    const userIngredients = [];
    for (let i = 0; i < rows.length; i++) {
      userIngredients.push(rows[i].ingredient)
    }
    // console.log('i am userIngredients', userIngredients)
    res.locals.fridge = userIngredients;
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
  // console.log('i am addIngredient middleware');
  const { user_id, ingredient } = req.body;
  // console.log('i am ingredient', ingredient)
  try {
    const insertQuery = `INSERT INTO Fridge VALUES(${user_id}, DEFAULT, '${ingredient}')`;
    await db.query(insertQuery)
    res.locals.ingredient = 'Ingredient Added';
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

fridgeController.deleteIngredient = async (req, res, next) => {
  // console.log('i am deleteIngredient middleware');
  const { user_id, ingredient } = req.body;
  try {
    const deleteQuery = `DELETE FROM Fridge WHERE user_id=${user_id} AND ingredient='${ingredient}'`;
    await db.query(deleteQuery)
    res.locals.ingredient = 'Ingredient Deleted';
    return next();
  }
  catch (err) {
    return next({
      log: `fridgeController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in fridgeController.deleteIngredient middleware',
      },
    });
  }
};

module.exports = fridgeController;