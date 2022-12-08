const db = require('../models/dbModel');
const axios = require('axios')

const fridgeController = {};

fridgeController.getFridge = async (req, res, next) => {
  console.log('i am getFridge middleware');
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
    console.log('i am userIngredients', userIngredients)
    res.locals.fridge = userIngredients;
    return next();
  }
  catch (err) {
    return next({
      log: `fridgeController.js: ERROR: ${err}`,
      status: 500,
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
      status: 500,
      message: {
        err: 'An error occurred in fridgeController.addIngredient middleware',
      },
    });
  }
};

module.exports = fridgeController;

  // console.log('i am addIngredient middleware');
  // const { user_id, ingredients } = req.body;
  // console.log('i am ingredients', ingredients)
  
  // try {
  //   for (let i = 0; i < ingredients.length; i++) {
  //     const insertQuery = `INSERT INTO Fridge VALUES(${user_id}, DEFAULT, '${ingredients[i]}')`
  //     await db.query(insertQuery)
  //     console.log(ingredients[i], 'inside the for loop')
  //   };
  //   const userFridge = await db.query(`SELECT ingredient from Fridge WHERE user_id = '${user_id}'`);
  //   console.log('i am userFridge', userFridge.rows)
  //   res.locals.ingredient = userFridge.rows[0].ingredient;
  //   return next();
  // }
  // catch (err) {
  //   return next({
  //     log: `fridgeController.js: ERROR: ${err}`,
  //     status: 400,
  //     message: {
  //       err: 'An error occurred in fridgeController.addIngredient middleware',
  //     },
  //   });
  // }