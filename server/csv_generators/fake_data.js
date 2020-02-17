const faker = require('faker');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const travelerType = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];
const language = ['az', 'cz', 'de', 'en', 'es', 'fa', 'fr', 'ge', 'it', 'ja', 'ko', 'nl', 'pl', 'ru', 'sk', 'sv', 'tr', 'vi', 'zh_CN', 'zh_TW'];



module.exports = {
  randomNum,
  rating: () => randomNum(1, 5),
  stay_month: () => randomNum(1, 12),
  travelerType: () => travelerType[randomNum(0, 4)],
  language: () => language[randomNum(0, 19)],
  date: () => `${randomNum(1990, 2020)}-${randomNum(1, 12)}-${randomNum(1, 26)}`,
  firstName: () => faker.name.firstName(),
  text: () => faker.lorem.word(),
  sentence: faker.lorem.sentence(),
  paragraph: faker.lorem.paragraph(),
  helpful_votes: () => randomNum(0, 100),
  avatar_url: faker.image.imageUrl(),
  stay_year: () => randomNum(1990, 2020),
  review_title: faker.lorem.sentence(),
  review_text: faker.lorem.paragraph(),
  city: faker.address.city(),
  state: faker.address.state(),
  title: faker.name.title(),
  rand_hotelId: () => randomNum(1, 1e7),
  rand_userId: () => randomNum(1, 1e7),
  rand_responseId: () => (randomNum(1, 10) === 1 ? randomNum(1, 10000000) : 'null'),
  rand_reviewId: () => randomNum(1, 1e8),
};
