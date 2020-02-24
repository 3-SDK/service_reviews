const cassandra = require('cassandra-driver');

module.exports = new cassandra.Client({
  // contactPoints: ['18.144.37.253'],
  // localDataCenter: 'us-west',
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
});
