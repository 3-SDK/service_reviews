# start docker container
# docker run --name cas1 -p 9042:9042 -v /Users/deanma/SDC:/csv -e CASSANDRA_CLUSTER_NAME=MyCluster -e CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch -e CASSANDRA_DC=datacenter1 -d cassandra
# docker run --name cas1 -p 9042:9042 -e CASSANDRA_CLUSTER_NAME=MyCluster -e CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch -e CASSANDRA_DC=datacenter1 -d cassandra

# docker exec -ti cas0 cqlsh -e "drop keyspace if exists reviews_keyspace"
# echo "keyspace dropped"

# run the seeder to create keyspace and create table
node seeder.js&
echo "keyspace and tables created"

########## COPY CSV INTO DATABASE ##################

#########users TABLE################
docker cp /Users/deanma/SDC/users.csv cas1:users.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm users.csv"
echo "users table seeded"

#########hotels TABLE################
docker cp /Users/deanma/SDC/hotels.csv cas1:hotels.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.hotels(id,name) FROM 'hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm hotels.csv"
echo "hotels table seeded"

#########response TABLE################
docker cp /Users/deanma/SDC/response.csv cas1:response.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.response(id,name,title,date,text) FROM 'response.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm response.csv"
echo "response table seeded"

#########reviews TABLE################
docker cp /Users/deanma/SDC/reviews.csv cas1:reviews.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews(id,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,responseId) FROM 'reviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews.csv"
echo "reviews table seeded"

#########reviews_by_hotel TABLE################
docker cp /Users/deanma/SDC/reviews_by_hotel.csv cas1:reviews_by_hotel.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(hotelId,review_date,reviewId) FROM 'reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews_by_hotel.csv"
echo "reviews by hotel table seeded"

#########reviews_by_time_year_and_hotel TABLE################
docker cp /Users/deanma/SDC/reviews_by_time_year_and_hotel.csv cas1:reviews_by_time_year_and_hotel.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews_by_time_year_and_hotel(hotelId,stay_month,review_date,reviewId) FROM 'reviews_by_time_year_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews_by_time_year_and_hotel.csv"
echo "reviews by time year table seeded"

#########reviews_by_rating_and_hotel TABLE################
docker cp /Users/deanma/SDC/reviews_by_rating_and_hotel.csv cas1:reviews_by_rating_and_hotel.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews_by_rating_and_hotel(hotelId,rating,review_date,reviewId) FROM 'reviews_by_rating_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews_by_rating_and_hotel.csv"
echo "reviews by rating table seeded"

#########reviews_by_traveler_type_and_hotel TABLE################
docker cp /Users/deanma/SDC/reviews_by_traveler_type_and_hotel.csv cas1:reviews_by_traveler_type_and_hotel.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews_by_traveler_type_and_hotel(hotelId,traveler_type,review_date,reviewId) FROM 'reviews_by_traveler_type_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews_by_traveler_type_and_hotel.csv"
echo "reviews by traveler type table seeded"

#########reviews_by_language_and_hotel TABLE################
docker cp /Users/deanma/SDC/reviews_by_language_and_hotel.csv cas1:reviews_by_language_and_hotel.csv
docker exec -ti cas1 cqlsh -e "COPY reviews_keyspace.reviews_by_language_and_hotel(hotelId,language,review_date,reviewId) FROM 'reviews_by_language_and_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
docker exec -ti cas1 bash -c "rm reviews_keyspace.reviews_by_language_and_hotel"
echo "reviews by language table seeded"