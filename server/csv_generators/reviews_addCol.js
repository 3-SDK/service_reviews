const fake = require('./fake_data');

module.exports = {
  header: 'id,user_name,user_handle,user_helpful_votes,user_city,user_state,user_avatar_url,response_name,response_title,response_date,response_text,hotelId\n',
  stringGen: (id) => `${id},${fake.firstName()},${fake.text()},${fake.helpful_votes()},${fake.city},${fake.state},${fake.avatar_url},${fake.firstName()},${fake.title},${fake.date()},${fake.sentence},${fake.rand_hotelId()}\n`,
};
