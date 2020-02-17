const fake = require('./fake_data');

// hotelId, travelerType K
// review_date C
// reviewId

module.exports = {
  header: 'hotelId,traveler_type,review_date,reviewId\n',
  stringGen: () => `${fake.rand_hotelId()},${fake.travelerType()},${fake.date()},${fake.rand_reviewId()}\n`,
};
