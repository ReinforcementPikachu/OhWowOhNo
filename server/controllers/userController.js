//bring in db
const db = require('../models/dbModel');

const userController = {};

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const found = await db.query(`SELECT user_id, username from Users WHERE username = '${username}' and password = '${password}'`);
    //need to send back id and username
    res.locals.user = found;
    return next();
  } 
  catch (err) {

  }
}

module.exports = userController;