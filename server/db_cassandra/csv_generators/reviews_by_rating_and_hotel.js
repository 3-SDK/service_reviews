const fake = require('./fake_data');

// hotelId, rating K
// review_date C
// reviewId

module.exports = {
  header: 'hotelId,rating,review_date,reviewId\n',
  stringGen: () => `${fake.rand_hotelId()},${fake.rating()},${fake.date()},${fake.rand_reviewId()}\n`,
};
