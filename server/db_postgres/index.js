const { Pool } = require('pq');

const pool = new Pool({
  user: 'dean',
  host: 'localhost',
  database: 'reviews',
  password: 'pass',
  port: 5432,
});


async function post(hoteldId, data) {
  // need to find the username_id

  // if there is a response, post into response table
  // get the response_id

  // post into the reviews table

};




module.exports = {
  post,
  getAll,
  get,
  remove,
  update,
};
