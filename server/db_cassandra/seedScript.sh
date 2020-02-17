# start docker container

# copy csv
# docker cp /Users/deanma/SDC/hotels.csv cas0:hotels.csv
# docker cp /Users/deanma/SDC/response.csv cas0:response.csv
# docker cp /Users/deanma/SDC/reviews_by_hotel.csv cas0:reviews_by_hotel.csv
# docker cp /Users/deanma/SDC/reviews_by_language_and_hotel.csv cas0:reviews_by_language_and_hotel.csv
# docker cp /Users/deanma/SDC/reviews_by_rating_and_hotel.csv cas0:reviews_by_rating_and_hotel.csv
# docker cp /Users/deanma/SDC/reviews_by_time_year_and_hotel.csv cas0:reviews_by_time_year_and_hotel.csv
# docker cp /Users/deanma/SDC/reviews_by_traveler_type_and_hotel.csv cas0:reviews_by_traveler_type_and_hotel.csv
# docker cp /Users/deanma/SDC/reviews.csv cas0:reviews.csv
# docker cp /Users/deanma/SDC/users.csv cas0:users.csv
# echo "csv transferred to container"

# docker exec -ti cas0 cqlsh -e "drop keyspace if exists reviews_keyspace"
# echo "keyspace dropped"
# sleep 5

# run the seeder to create keyspace and create table
# node seeder.js&
# echo "keyspace and tables created"
# sleep 1

# copy into tables

# start=$(date +%s)
# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
# end=$(date +%s)
# seconds=$(echo "$end - $start" | bc)
# echo "users table seeded in $seconds"

# start=$(date +%s)
# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.hotels(id,name) FROM 'hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
# end=$(date +%s)
# seconds=$(echo "$end - $start" | bc)
# echo "hotels table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.response(id,name,title,date,text) FROM 'response.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "response table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews(id,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId) FROM 'reviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(hotelId,review_date,reviewId) FROM 'reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews by hotel table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_time_year_and_hotel(hotelId,stay_month,review_date,reviewId) FROM 'reviews_by_time_year_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews by time year table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_rating_and_hotel(hotelId,rating,review_date,reviewId) FROM 'reviews_by_rating_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews by rating table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_traveler_type_and_hotel(hotelId,traveler_type,review_date,reviewId) FROM 'reviews_by_traveler_type_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews by traveler type table seeded"

start=$(date +%s)
docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_language_and_hotel(hotelId,language,review_date,reviewId) FROM 'reviews_by_language_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
end=$(date +%s)
seconds=$(echo "$end - $start" | bc)
echo "reviews by language table seeded"