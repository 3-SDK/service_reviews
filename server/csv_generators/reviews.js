const fake = require('./fake_data');


module.exports = {
  header: 'id,ratings,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,expensive_rating,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId\n',
  stringGen: (id) => `${id},${fake.rating()},${fake.stay_month()},${fake.stay_year()},${fake.travelerType()},${fake.language()},${fake.date()},${fake.sentence},${fake.paragraph},${fake.helpful_votes()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rating()},${fake.rand_responseId()}\n`,
};



/*
17 col so 16 commas
id
rating
stay_month
stay_year
traveler_type
language
review_date
review_title
review_text
helpful_vote_count
service
sleep_qual
value
location
rooms
cleanliness
responseId
*/