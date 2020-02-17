# start docker container
# docker run --name postgres -v /Users/deanma/SDC:/csv -e POSTGRES_PASSWORD=pass -d postgres:latest

# docker cp /Users/deanma/SDC/reviews_sql.csv cas1:reviews_sql.csv
# echo "csv transferred to container"

# create reviews_db database
docker exec -ti postgres psql -U postgres -c "CREATE DATABASE reviews_db;"

# create users table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS users(id int PRIMARY KEY, name varchar(255), handle varchar(255), helpful_votes int, city varchar(255), state varchar(255), avatar_url varchar(255));"

# create hotels table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS hotels(id int PRIMARY KEY, name varchar(255));"

# create response table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS response(id int PRIMARY KEY, name varchar(255), title varchar(255), date date, text varchar(255));"

# create reviews table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS reviews(id int PRIMARY KEY, userId int, hotelId int, responseId int, rating varchar(255),stay_month varchar(255),stay_year varchar(255),traveler_type varchar(255),language varchar(255),review_date date,review_title varchar(255),review_text varchar(255),helpful_vote_count int,service int,sleep_qual int,value int,location int,rooms int,cleanliness int);"

# copy into tables

# start=$(date +%s)
# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output
# end=$(date +%s)
# seconds=$(echo "$end - $start" | bc)
# echo "users table seeded in $seconds"
