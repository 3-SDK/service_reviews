const fake = require('./fake_data');

// hotel Id
// hotel name


module.exports = {
  header: 'id, name\n',
  stringGen: (id) => `${id},${fake.firstName()}\n`,
};
