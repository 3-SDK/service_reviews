const fake = require('./fake_data');


module.exports = {
  header: 'id,name,handle,helpful_votes,city,state,avatar_url\n',
  stringGen: (id) => `${id},${fake.firstName()},${fake.text()},${fake.helpful_votes()},${fake.city},${fake.state},${fake.avatar_url}\n`,
};
