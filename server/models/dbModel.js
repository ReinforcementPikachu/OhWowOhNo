const dotenv = require('dotenv');
const { Pool } = require('pg');
dotenv.config();

// const PG_URI = 'postgres://llwxcgfc:SOs7G4BljRPuFCORZAeKwLXIszTsgd16@mouse.db.elephantsql.com/llwxcgfc';
const PG_URI = process.env.POSTGRESS_URI;
console.log('I am PG_URI', PG_URI)
// const PG_URI = `'${process.env.POSTGRESS_URI}'`;
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};