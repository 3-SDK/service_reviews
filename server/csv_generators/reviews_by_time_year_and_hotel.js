const fake = require('./fake_data');

// hotelId, stay_month K
// review_date C
// reviewId

module.exports = {
  header: 'hotelId,stay_month,review_date,reviewId\n',
  stringGen: () => `${fake.rand_hotelId()},${fake.stay_month()},${fake.date()},${fake.rand_reviewId()}\n`,
};
