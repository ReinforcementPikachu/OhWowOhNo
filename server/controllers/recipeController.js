const db = require('../models/dbModel');

const recipeController = {};

//get saved recipes from db
recipeController.getRecipes = async (req, res, next) => {
  console.log('i am getRecipes middleware');
  const { id } = req.params;
  const query = `SELECT * from Recipe WHERE user_id = '${id}'`;
  try {
    const recipes = await db.query(query);
    console.log('recipes', recipes);
    res.locals.recipes = recipes;
    return next();
  }
  catch (err) {
    return next({
      log: `recipeController.js: ERROR: ${err}`,
      status: 500,
      message: {
        err: 'An error occurred in recipeController.getRecipes middleware',
      },
    });
  }
};

recipeController.addRecipe = async (req, res, next) => {
  const name = req.body.recipe;
  console.log(req.body);
  const query = `INSERT INTO Recipes ('id' 'name') VALUES('${user_id}', '${name}')`;
  try{
    const insertion = await db.query(query);
    console.log(insertion);
    res.locals.insertion = insertion;
    return next();
  } catch(err){
    return next({
      log: `recipeController.js: ERROR: ${err}`,
      status: 500,
      message: {
        err: 'An error occurred in recipeController.addRecipe middleware'
      }
    });
  }
};

recipeController.deleteRecipe = async (req, res, next) => {
  const { user_id, name } = req.body;
  try {
    const deleteQuery = `DELETE FROM Recipe WHERE user_id=${user_id} AND name='${name}'`;
    await db.query(deleteQuery)
    res.locals.recipe = 'Recipe Deleted';
    return next();
  }
  catch (err) {
    return next({
      log: `recipeController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in recipeController.deleteRecipe middleware',
      },
    });
  }
};

module.exports = recipeController;