const db = require('../db/cassandra');

async function getOne(reviewId) {
  const queryString = `select json * from reviews_keyspace.reviews where id=${reviewId}`;
  return db.execute(queryString);
}

async function removeReview(reviewId) {
  const queryString = `delete from reviews_keyspace.reviews where id=${reviewId}`;
  return db.execute(queryString);
}

async function removeReviewByHotel(reviewId, hotelId) {
  const queryString = `delete from reviews_keyspace.reviews_by_hotel2 where hotelid=${hotelId} and id=${reviewId}`;
  return db.execute(queryString);
}

async function getAllByHotelIdAndFilter(tableName, filter, value, hotelId, limit) {
  const queryString = `select json * from reviews_keyspace.${tableName} where ${filter}=? and hotelid=? order by review_date desc limit ?`;
  return db.execute(queryString, [value, hotelId, limit], { prepare: true });
}

async function getAllByHotelId(hotelId, limit) {
  const queryString = `select json * from reviews_keyspace.reviews_by_hotel2 where hotelid=${hotelId} limit ${limit}`;
  return db.execute(queryString);
}

async function postOne(tableName, params) {
  const queryString = `insert into reviews_keyspace.${tableName} (hotelid,review_date,cleanliness,helpful_vote_count,id,language,location,rating,review_text,review_title,rooms,service,sleep_qual,stay_month,stay_year,traveler_type,user_avatar_url,user_city,user_handle,user_helpful_votes,user_name,user_state,value)\
  values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return db.execute(queryString, params, { prepare: true });
}

module.exports = {
  getOne,
  postOne,
  getAllByHotelIdAndFilter,
  getAllByHotelId,
  removeReview,
  removeReviewByHotel,
};
