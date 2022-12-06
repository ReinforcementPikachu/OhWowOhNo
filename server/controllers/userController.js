const db = require('../models/dbModel');

const userController = {};

userController.signup = async (req, res, next) => {
  console.log('i am signup middleware');
  const { username, password } = req.body;
  const insert = `INSERT INTO Users (username, password) VALUES('${username}', '${password}')`;
  try {
    const newUser = await db.query(insert);
    return next();
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
  // console.log('i am login middleware');
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