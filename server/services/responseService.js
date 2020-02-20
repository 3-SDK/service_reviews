const db = require('../db');

async function getOne(responseId) {
  const queryString = `select json * from reviews_keyspace.response where id=${responseId}`;
  return db.execute(queryString);
}

module.exports = {
  getOne,
};
