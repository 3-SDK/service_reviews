const createKeySpace = `create keyspace if not exists reviews_keyspace with replication = {'class':'SimpleStrategy','replication_factor':1}`;

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
user_name text,
user_handle text,
user_helpful_votes int,
user_city text,
user_state text,
user_avatar_url text,
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
response_name text,
response_title text,
response_date text,
response_text text,
hotelId int,
PRIMARY KEY(id, hotelId, review_date));
`;

const createReviewsBaseTbl = `create table reviews_keyspace.reviews_by_hotel
(id int, 
user_name text,
user_handle text,
user_helpful_votes int,
user_city text,
user_state text,
user_avatar_url text,
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
response_name text,
response_title text,
response_date text,
response_text text,
hotelId int,
PRIMARY KEY(hotelId, id, review_date));
`;

const createReviewByTimeHotelTbl = `create materialized view reviews_keyspace.reviews_by_time_year_and_hotel
as select * from reviews_keyspace.reviews_by_hotel 
where stay_month is not null and hotelId is not null and id is not null and review_date is not null
primary key ((stay_month,hotelId),review_date,id);
`;

const createReviewByRatingHotelTbl = `create materialized view reviews_keyspace.reviews_by_rating_and_hotel
as select * from reviews_keyspace.reviews_by_hotel
where rating is not null and hotelId is not null and id is not null and review_date is not null
primary key ((rating,hotelId),review_date,id);
`;

const createReviewByTravelHotelTbl = `create materialized view reviews_keyspace.reviews_by_traveler_type_and_hotel
as select * from reviews_keyspace.reviews_by_hotel
where traveler_type is not null and review_date is not null and hotelId is not null and id is not null and review_date is not null
primary key ((traveler_type,hotelId),review_date,id);
`;

const createReviewByLangHotelTbl = `create materialized view reviews_keyspace.reviews_by_language_and_hotel
as select * from reviews_keyspace.reviews_by_hotel
where language is not null and hotelId is not null and id is not null and review_date is not null
primary key ((language,hotelId),review_date,id);
`;

module.exports = {
  createKeySpace,
  createUsersTbl,
  createHotelsTbl,
  createResponseTbl,
  createReviewsTbl,
  createReviewsBaseTbl,
  createReviewByTimeHotelTbl,
  createReviewByRatingHotelTbl,
  createReviewByTravelHotelTbl,
  createReviewByLangHotelTbl,
};
