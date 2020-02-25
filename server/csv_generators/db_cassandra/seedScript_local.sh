# run the seeder to create keyspace and create table
# node seeder.js&
# echo "keyspace and tables created"

########## COPY CSV INTO DATABASE ##################

#########users TABLE################
cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM '/var/lib/cassandra/users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "users table seeded"

#########hotels TABLE################
cqlsh -e "COPY reviews_keyspace.hotels(id,name) FROM '/var/lib/cassandra/hotels.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "hotels table seeded"

#########response TABLE################
cqlsh -e "COPY reviews_keyspace.response(id,name,title,date,text) FROM '/var/lib/cassandra/response.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "response table seeded"

#########reviews TABLE################
cqlsh -e "COPY reviews_keyspace.reviews(id,user_name,user_handle,user_helpful_votes,user_city,user_state,user_avatar_url,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,response_name,response_title,response_date,response_text,hotelId) FROM '/var/lib/cassandra/reviews2.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
echo "reviews table seeded"

#########reviews_by_hotel TABLE################
cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(id,user_name,user_handle,user_helpful_votes,user_city,user_state,user_avatar_url,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,response_name,response_title,response_date,response_text,hotelId) FROM '/var/lib/cassandra/reviews2.csv' WITH DELIMITER=',' AND MAXATTEMPTS=1000 HEADER=TRUE;" > ~/output
echo "reviews_by_hotel seeded"