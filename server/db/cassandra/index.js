const cassandra = require('cassandra-driver');

module.exports = new cassandra.Client({
  contactPoints: ['18.144.37.253', '54.183.191.164', '13.57.186.28', '54.219.161.236', '13.56.228.55'],
  localDataCenter: 'us-west',
});
