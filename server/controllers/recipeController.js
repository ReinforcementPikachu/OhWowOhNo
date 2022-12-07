const db = require('../models/dbModel');

const recipeController = {};

//get saved recipes from db
recipeController.getRecipes = async (req, res, next) => {
  console.log('i am getRecipes middleware');
  //pull user
  const { user_id } = req.body;
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
  const { name, image, url, user_id } = req.body;
  console.log(req.body);
  const query = `INSERT INTO Recipes ('user_id', 'name', 'image', 'url') VALUES('${user_id}', '${name}', '${image}', '${url}')`;
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

// recipeController.deleteRecipe = async (req, res, next) => {};

module.exports = recipeController;