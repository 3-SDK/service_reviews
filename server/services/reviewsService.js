const db = require('../db');

async function getOne(reviewId) {
  const queryString = `select json * from reviews_keyspace.hotels where id=${reviewId}`;
  return db.execute(queryString);
}

module.exports = {
  getOne,
};
