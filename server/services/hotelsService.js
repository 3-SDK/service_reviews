const db = require('../db/cassandra');

async function getOne(hotelId) {
  const queryString = `select json * from reviews_keyspace.hotels where id=${hotelId}`;
  return db.execute(queryString);
}

module.exports = {
  getOne,
};
