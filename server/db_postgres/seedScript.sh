# start docker container
docker run --name postgres -v /Users/deanma/SDC:/csv -e POSTGRES_PASSWORD=pass -d postgres:latest

# create database
docker exec -ti postgres psql -U postgres -c "CREATE TABLE public.tbl_students(rno integer, name character varying)"

# create tables
docker exec -ti postgres psql -U postgres -c "CREATE TABLE public.tbl_students(rno integer, name character varying)"
docker exec -ti postgres psql -U postgres -c "CREATE TABLE public.tbl_students(rno integer, name character varying)"
docker exec -ti postgres psql -U postgres -c "CREATE TABLE public.tbl_students(rno integer, name character varying)"
docker exec -ti postgres psql -U postgres -c "CREATE TABLE public.tbl_students(rno integer, name character varying)"

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

# start=$(date +%s)
# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.reviews_by_hotel(hotelId,review_date,reviewId) FROM 'reviews_by_hotel.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
# end=$(date +%s)
# seconds=$(echo "$end - $start" | bc)
# echo "reviews by hotel table seeded"

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