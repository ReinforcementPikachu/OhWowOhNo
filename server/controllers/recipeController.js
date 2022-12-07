const db = require('../models/dbModel');

const recipeController = {};

//get saved recipes from db
recipeController.getRecipes = async (req, res, next) => {  //pull user
  const { user_id } = req.params;
  console.log(user_id);
  const query = `SELECT * from Recipe WHERE user_id = '${user_id}'`;
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
        err: 'An error occurred in recipeController.getRecipe middleware',
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
        err: 'An error occurred in recipeController.getRecipe middleware'
      }
    });
  }
};

module.exports = recipeController;