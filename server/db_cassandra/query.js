const createKeySpace = `create keyspace reviews_keyspace with replication = {'class':'SimpleStrategy','replication_factor':1}`;

const createUsersTbl = `create table reviews_keyspace.users 
(id int, 
name text, 
handle text,
helpful_votes int,
city text,
state text,
avatar_url text,
PRIMARY KEY(id));
`;

const createHotelsTbl = `create table reviews_keyspace.hotels
(id int, 
name text, 
PRIMARY KEY(id));
`;

const createResponseTbl = `create table reviews_keyspace.response
(id int, 
name text, 
title text,
date date,
text text,
PRIMARY KEY(id));
`;

const createReviewsTbl = `create table reviews_keyspace.reviews
(id int, 
rating int,
stay_month int,
stay_year int,
traveler_type text,
language text,
review_date date,
review_title text,
review_text text,
helpful_vote_count int,
service int,
sleep_qual int,
value int,
location int,
rooms int,
cleanliness int,
responseId text,
PRIMARY KEY(id));
`;

const createReviewByHotelTbl = `create table reviews_keyspace.reviews_by_hotel
(hotelId int, 
review_date date,
reviewId int,
PRIMARY KEY(hotelId, review_date)) WITH CLUSTERING ORDER BY (review_date DESC);
`;

const createReviewByTimeHotelTbl = `create table reviews_keyspace.reviews_by_time_year_and_hotel
(hotelId int, 
stay_month int,
review_date date,
reviewId int,
PRIMARY KEY((hotelId, stay_month), review_date)) WITH CLUSTERING ORDER BY (review_date DESC);
`;

const createReviewByRatingHotelTbl = `create table reviews_keyspace.reviews_by_rating_and_hotel
(hotelId int, 
rating int,
review_date date,
reviewId int,
PRIMARY KEY((hotelId, rating), review_date)) WITH CLUSTERING ORDER BY (review_date DESC);
`;

const createReviewByTravelHotelTbl = `create table reviews_keyspace.reviews_by_traveler_type_and_hotel
(hotelId int, 
traveler_type text,
review_date date,
reviewId int,
PRIMARY KEY((hotelId, traveler_type), review_date)) WITH CLUSTERING ORDER BY (review_date DESC);
`;

const createReviewByLangHotelTbl = `create table reviews_keyspace.reviews_by_language_and_hotel
(hotelId int, 
language text,
review_date date,
reviewId int,
PRIMARY KEY((hotelId, language), review_date)) WITH CLUSTERING ORDER BY (review_date DESC);
`;

module.exports = {
  createKeySpace,
  createUsersTbl,
  createHotelsTbl,
  createResponseTbl,
  createReviewsTbl,
  createReviewByHotelTbl,
  createReviewByTimeHotelTbl,
  createReviewByRatingHotelTbl,
  createReviewByTravelHotelTbl,
  createReviewByLangHotelTbl,
};
