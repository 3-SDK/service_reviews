# start docker container

# copy csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/hotels.csv cas0:hotels.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/response.csv cas0:response.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews_by_hotel.csv cas0:reviews_by_hotel.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews_by_language_and_hotel.csv cas0:reviews_by_language_and_hotel.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews_by_rating_and_hotel.csv cas0:reviews_by_rating_and_hotel.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews_by_time_year_and_hotel.csv cas0:reviews_by_time_year_and_hotel.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews_by_traveler_type_and_hotel.csv cas0:reviews_by_traveler_type_and_hotel.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/reviews.csv cas0:reviews.csv
docker cp /Users/deanma/SDC/reviews/server/db_cassandra/csv_generators/users.csv cas0:users.csv

docker exec -ti cas0 cqlsh -e "drop keyspace reviews_keyspace"
echo "keyspace dropped"
sleep 1

# run the seeder to create keyspace and create table
node seeder.js&
echo "keyspace and tables created"
sleep 1

# copy into tables
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "users table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.hotels(id,name) FROM 'hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "hotels table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.response(id,name,title,date,text) FROM 'response.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "response table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews(id,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId) FROM 'reviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(hotelId,review_date,reviewId) FROM 'reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by hotel table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_time_year_and_hotel(hotelId,stay_month,review_date,reviewId) FROM 'reviews_by_time_year_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by time year table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_rating_and_hotel(hotelId,rating,review_date,reviewId) FROM 'reviews_by_rating_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by rating table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_traveler_type_and_hotel(hotelId,traveler_type,review_date,reviewId) FROM 'reviews_by_traveler_type_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by traveler type table seeded"

docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_language_and_hotel(hotelId,language,review_date,reviewId) FROM 'reviews_by_language_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews by language table seeded"

## TYPE THIS IN:
# "COPY users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY hotels(id,name) FROM 'hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(id,name,title,date,text) FROM 'response.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.reviews(id,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId) FROM 'reviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(hotelId,review_date,reviewId) FROM 'reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(hotelId,stay_month,review_date,reviewId) FROM 'reviews_by_time_year_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(hotelId,rating,review_date,reviewId) FROM 'reviews_by_rating_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(hotelId,traveler_type,review_date,reviewId) FROM 'reviews_by_traveler_type_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;"
# "COPY reviews_keyspace.response(hotelId,language,review_date,reviewId) FROM 'reviews_by_language_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;"