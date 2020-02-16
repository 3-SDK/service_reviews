const cassandra = require('cassandra-driver');
const query = require('./query');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
});

// const queryInsertReview = 'INSERT INTO reviews_by_review_date (hotel_id, rating, stay_month, traveler_type, language, review_date, users_username, users_handle, users_location, users_helpful_votes, users_avatar_url, stay_year, review_title, review_text, helpful_vote_count, hotel_ratings_service, hotel_ratings_sleep_quality, hotel_ratings_value, hotel_ratings_location, expensive_rating, response_name, response_title, response_date, response_text)\
// VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

// client.execute(queryInsertReview, paramsChooser(1), { prepare: true })
//   .then((result) => console.log(result));

// drop keyspace if exists
// create keyspace
// use keyspace
// create table
// insert from csv

// const queries = [
//   { query: query.createUsersTbl },
//   { query: query.createHotelsTbl },
//   { query: query.createResponseTbl },
//   { query: query.createReviewsTbl },
//   { query: query.createReviewByHotelTbl },
//   { query: query.createReviewByTimeHotelTbl },
//   { query: query.createReviewByRatingHotelTbl },
//   { query: query.createReviewByTravelHotelTbl },
//   { query: query.createReviewByLangHotelTbl },
// ];


// client.execute(query.createKeySpace)
//   .then(() => client.batch(queries, { prepare: true }))
//   .catch((err) => console.log(err));

client.execute(query.createKeySpace)
  .then(() => client.execute(query.createHotelsTbl))
  .then(() => client.execute(query.createResponseTbl))
  .then(() => client.execute(query.createReviewsTbl))
  .then(() => client.execute(query.createUsersTbl))
  .then(() => client.execute(query.createReviewByHotelTbl))
  .then(() => client.execute(query.createReviewByLangHotelTbl))
  .then(() => client.execute(query.createReviewByTimeHotelTbl))
  .then(() => client.execute(query.createReviewByRatingHotelTbl))
  .then(() => client.execute(query.createReviewByTravelHotelTbl))
  .catch((err) => console.log(err));

