const fake = require('./fake_data');

/*
id
name
title
date
text
*/

module.exports = {
  header: 'id,name,title,date,text\n',
  stringGen: (id) => `${id},${fake.firstName()},${fake.title},${fake.date()},${fake.paragraph}\n`,
};

