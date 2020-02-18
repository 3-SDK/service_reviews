# run the seeder to create keyspace and create table
# node seeder.js&
# echo "keyspace and tables created"

########## COPY CSV INTO DATABASE ##################

#########users TABLE################
# cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM '/Users/deanma/SDC/users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
# echo "users table seeded"

#########hotels TABLE################
cqlsh -e "COPY reviews_keyspace.hotels(id,name) FROM '/Users/deanma/SDC/hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "hotels table seeded"

#########response TABLE################
cqlsh -e "COPY reviews_keyspace.response(id,name,title,date,text) FROM '/Users/deanma/SDC/response.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "response table seeded"

#########reviews TABLE################
cqlsh -e "COPY reviews_keyspace.reviews(id,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId) FROM '/Users/deanma/SDC/reviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews table seeded"

#########reviews_by_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(hotelId,review_date,reviewId) FROM '/Users/deanma/SDC/reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by hotel table seeded"

#########reviews_by_time_year_and_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_time_year_and_hotel(hotelId,stay_month,review_date,reviewId) FROM '/Users/deanma/SDC/reviews_by_time_year_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by time year table seeded"

#########reviews_by_rating_and_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_rating_and_hotel(hotelId,rating,review_date,reviewId) FROM '/Users/deanma/SDC/reviews_by_rating_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by rating table seeded"

#########reviews_by_traveler_type_and_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_traveler_type_and_hotel(hotelId,traveler_type,review_date,reviewId) FROM '/Users/deanma/SDC/reviews_by_traveler_type_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by traveler type table seeded"

#########reviews_by_language_and_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_language_and_hotel(hotelId,language,review_date,reviewId) FROM '/Users/deanma/SDC/reviews_by_language_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by language table seeded"