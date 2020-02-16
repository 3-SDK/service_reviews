const fake = require('./fake_data');

// hotelId, language K
// review_date C
// reviewId


module.exports = {
  header: 'hotelId,language,review_date,reviewId\n',
  stringGen: () => `${fake.rand_hotelId()},${fake.language()},${fake.date()},${fake.rand_reviewId()}\n`,
};
