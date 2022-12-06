const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
//remember to connect db
// const sql = require('sql')
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/api/user', userRouter)
// app.use('/api/fridge', fridgeRouter)
// app.use('/api/recipe', recipeRouter)

//serve HTML
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

//serve static build files
app.use('/build', express.static(path.join(__dirname, '../build')));

//error 404 handler
app.use((req, res) => {
  res.status(404).send('Sorry, page not found >.<')
});

//global error
app.use((err, res) => {
  const error = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, error, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app;