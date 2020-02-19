const hotels = require('./hotels');
const response = require('./response');
const reviews_by_hotel = require('./reviews_by_hotel');
const reviews_by_language_and_hotel = require('./reviews_by_language_and_hotel');
const reviews_by_rating_and_hotel = require('./reviews_by_rating_and_hotel');
const reviews_by_time_year_and_hotel = require('./reviews_by_time_year_and_hotel');
const reviews_by_traveler_type_and_hotel = require('./reviews_by_traveler_type_and_hotel');
const reviews = require('./reviews');
const users = require('./users');
const writeEngine = require('./writeEngine');
const reviews_sql = require('./reviews_sql');
const reviews_addCol = require('./reviews_addCol');

// CSV generation (general tables)
writeEngine(reviews.header, reviews.stringGen, 1e8, '../../../reviews2.csv');
writeEngine(users.header, users.stringGen, 1e6, 'users.csv');
writeEngine(hotels.header, hotels.stringGen, 1e7, 'hotels.csv');
writeEngine(response.header, response.stringGen, 1e6, 'response.csv');

// CSV generation (Cassandra specific tables)
writeEngine(reviews_by_hotel.header, reviews_by_hotel.stringGen, 1e8, 'reviews_by_hotel.csv');
writeEngine(reviews_by_language_and_hotel.header, reviews_by_language_and_hotel.stringGen, 1e8, 'reviews_by_language_and_hotel.csv');
writeEngine(reviews_by_rating_and_hotel.header, reviews_by_rating_and_hotel.stringGen, 1e8, 'reviews_by_rating_and_hotel.csv');
writeEngine(reviews_by_time_year_and_hotel.header, reviews_by_time_year_and_hotel.stringGen, 1e8, 'reviews_by_time_year_and_hotel.csv');
writeEngine(reviews_by_traveler_type_and_hotel.header, reviews_by_traveler_type_and_hotel.stringGen, 1e8, 'reviews_by_traveler_type_and_hotel.csv');
writeEngine(reviews_addCol.header, reviews_addCol.stringGen, 2, '../../../reviews_addCol.csv');

// CSV generation (PostgresQL specific tables)
writeEngine(reviews_sql.header, reviews_sql.stringGen, 1e8, 'reviews_sql.csv');
