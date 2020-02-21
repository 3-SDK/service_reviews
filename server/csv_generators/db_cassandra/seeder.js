const cassandra = require('cassandra-driver');
const query = require('./query');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
});


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
  .then(() => client.execute(query.createReviewsBaseTbl))
  .then(() => client.execute(query.createReviewByLangHotelTbl))
  .then(() => client.execute(query.createReviewByTimeHotelTbl))
  .then(() => client.execute(query.createReviewByRatingHotelTbl))
  .then(() => client.execute(query.createReviewByTravelHotelTbl))
  .catch((err) => console.log(err));
