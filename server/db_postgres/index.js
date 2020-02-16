const { Pool } = require('pg');

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

async function getAll(hotelId) {
  // const queryString = 'SELECT u.username, m.text, r.name FROM users u INNER JOIN messages m ON u.id = m.username INNER JOIN rooms r ON r.id = m.roomname;';

}


module.exports = {
  post,
  getAll,
  // get,
  // remove,
  // update,
};
