const db = require('../models/dbModel');

const recipeController = {};

// recipeController.getRecipe = async (req, res, next) => {
//   console.log('i am getRecipe middleware');
//   const { user_id } = req.body;
//   const query = ;
//   try {
//     const recipes = await db.query(query);
//     res.locals.recipes = recipes;
//     return next();
//   }
//   catch (err) {
//     return next({
//       log: `recipeController.js: ERROR: ${err}`,
//       status: 400,
//       message: {
//         err: 'An error occurred in recipeController.getRecipe middleware',
//       },
//     });
//   }
// };

module.exports = recipeController;