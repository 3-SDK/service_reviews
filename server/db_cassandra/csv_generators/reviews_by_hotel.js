const fake = require('./fake_data');

// hotelId K
// review_date C
// reviewId

module.exports = {
  header: 'hotelId,review_date,reviewId\n',
  stringGen: () => `${fake.rand_hotelId()},${fake.date()},${fake.rand_reviewId()}\n`,
};
