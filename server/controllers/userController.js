const db = require('../models/dbModel');

const userController = {};

userController.signup = async (req, res, next) => {
  console.log('i am signup middleware');
  const { username, password } = req.body;
  //check if user exists 
  //if exists send back 'username already exists"
  //else create user
  try {
    const query = `SELECT username from Users WHERE username = '${username}'`;
    const existingUsername = await db.query(query);
    console.log('i am existingUsername', existingUsername.rows)
    if(!existingUsername.rows.length) {
      const insert = `INSERT INTO Users (username, password) VALUES('${username}', '${password}')`;
      const idQuery = `select user_id from Users where username = '${username}'`
      await db.query(insert);
      const userId = await db.query(idQuery)
      console.log(userId, 'userId')
      res.locals.newUser = userId.rows[0];
      return next();
    } else {
      res.locals.newUser = existingUsername.rows[0];
      return next();
    }
  }
  catch (err) {
    return next({
      log: `userController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in userController.signup middleware',
      },
    });
  }
};

userController.login = async (req, res, next) => {
  console.log('i am login middleware');
  const { username, password } = req.body;
  const query = `SELECT user_id, username from Users WHERE username = '${username}' and password = '${password}'`;
  try {
    const found = await db.query(query);
    //need to send back id and username
    console.log('i am found', found);
    res.locals.user = found.rows[0];
    return next();
  } 
  catch (err) {
    return next({
      log: `userController.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in userController.login middleware',
      },
    });
  }
}

module.exports = userController;