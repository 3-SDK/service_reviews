const fake = require('./fake_data');


module.exports = {
  header: 'id,user_name,user_handle,user_helpful_votes,user_city,user_state,user_avatar_url,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,response_name,response_title,response_date,response_text,hotelId\n',
  stringGen: (id) => `${id},${fake.firstName()},${fake.text()},${fake.helpful_votes()},${fake.city},${fake.state},${fake.avatar_url},${fake.rating()},${fake.stay_month()},${fake.stay_year()},${fake.travelerType()},${fake.language()},${fake.date()},${fake.sentence},${fake.sentence},${fake.helpful_votes()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.response()},${fake.rand_hotelId()}\n`,
};