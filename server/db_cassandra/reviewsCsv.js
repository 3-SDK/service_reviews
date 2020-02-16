const faker = require('faker');
const fs = require('fs');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const travelerType = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];
const language = ['az', 'cz', 'de', 'en', 'es', 'fa', 'fr', 'ge', 'it', 'ja', 'ko', 'nl', 'pl', 'ru', 'sk', 'sv', 'tr', 'vi', 'zh_CN', 'zh_TW'];


const reviewsWithResponse = () => `${randomNum(1, 5)},
  ${randomNum(1, 12)},
  ${travelerType[randomNum(0, 4)]},
  ${language[randomNum(0, 19)]},
  ${faker.date.past(10).toDateString()},
  ${faker.lorem.word()},
  ${faker.lorem.word()},
  ${faker.address.city()}, ${faker.address.state()},
  ${randomNum(0, 100)},
  ${faker.image.imageUrl()},
  ${randomNum(1990, 2020)},
  ${faker.lorem.sentence()},
  ${faker.lorem.paragraph()},
  ${randomNum(0, 100)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  ${faker.lorem.word()},
  ${faker.lorem.sentence()},
  ${faker.date.past(10).toDateString()},
  ${faker.lorem.paragraph()}
  \n`;


const reviewsNoResponse = () => `${randomNum(1, 5)},
  ${randomNum(1, 12)},
  ${travelerType[randomNum(0, 4)]},
  ${language[randomNum(0, 19)]},
  ${faker.date.past(10).toDateString()},
  ${faker.lorem.word()},
  ${faker.lorem.word()},
  ${faker.address.city()}, ${faker.address.state()},
  ${randomNum(0, 100)},
  ${faker.image.imageUrl()},
  ${randomNum(1990, 2020)},
  ${faker.lorem.sentence()},
  ${faker.lorem.paragraph()},
  ${randomNum(0, 100)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  ${randomNum(0, 5)},
  \n`;

const dataGenerator = (i) => {
  return randomNum(1, 10) < 3 ? `${i}${reviewsWithResponse()}` : `${i}${reviewsNoResponse()}`;
};

const csvHeader = 'hotel_id,rating,stay_month,traveler_type,language,review_date,users_username,users_handle,users_location,users_helpful_votes,users_avatar_url,stay_year,review_title,review_text,helpful_vote_count,hotel_ratings_service,hotel_ratings_sleep_quality,hotel_ratings_value,hotel_ratings_location,expensive_rating,response_name,response_title,response_date,response_text\n';
let stringToInsert = ''

for (let hotel_id = 1; hotel_id <= 10000000; hotel_id += 1) {
  for (let review_count = 1; review_count <= 5; review_count += 1) {
    stringToInsert += dataGenerator(hotel_id);
  }
}

console.log('done');