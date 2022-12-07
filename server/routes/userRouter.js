const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/signup',
  userController.signup,
  (req, res) => {
    res.status(201).json(res.locals.newUser)
  }
);

userRouter.post('/login',
  userController.login,
  (req, res) => {
    // console.log('I am in the userRouter')
    res.status(200).json(res.locals.user);
  }
);


module.exports = userRouter;