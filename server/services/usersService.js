const db = require('../db');

async function getOne(userId) {
  const queryString = `select json * from reviews_keyspace.users where id=${userId}`;
  return db.execute(queryString);
}

module.exports = {
  getOne,
};
