# start docker container
docker run --name postgres -v /Users/deanma/SDC:/csv -e POSTGRES_PASSWORD=pass -d postgres:latest

# create reviews_db database
docker exec -ti postgres psql -U postgres -c "CREATE DATABASE reviews_db;"

# create users table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS users(id int PRIMARY KEY, name varchar(255), handle varchar(255), helpful_votes int, city varchar(255), state varchar(255), avatar_url varchar(255));"

# create hotels table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS hotels(id int PRIMARY KEY, name varchar(255));"

# create response table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS response(id int PRIMARY KEY, name varchar(255), title varchar(255), date date, text varchar(255));"

# create reviews table
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS reviews(id int PRIMARY KEY, userId int, hotelId int, responseId varchar(255), rating varchar(255),stay_month varchar(255),stay_year varchar(255),traveler_type varchar(255),language varchar(255),review_date date,review_title varchar(255),review_text varchar(255),helpful_vote_count int,service int,sleep_qual int,value int,location int,rooms int,cleanliness int);"

###### users table #########
# docker cp /Users/deanma/SDC/users.csv postgres:users.csv
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "\COPY users FROM '/csv/users.csv' DELIMITER ',' CSV HEADER"
# docker exec -ti postgres bash -c "rm users.csv"
echo "users table seeded"

###### hotels table #########
# docker cp /Users/deanma/SDC/hotels.csv postgres:hotels.csv
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "\COPY hotels FROM '/csv/hotels.csv' DELIMITER ',' CSV HEADER"
# docker exec -ti postgres bash -c "rm hotels.csv"
echo "hotels table seeded"

###### response table #########
# docker cp /Users/deanma/SDC/response.csv postgres:response.csv
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "\COPY response FROM '/csv/response.csv' DELIMITER ',' CSV HEADER"
# docker exec -ti postgres bash -c "rm response.csv"
echo "response table seeded"

###### reviews table #########
# docker cp /Users/deanma/SDC/reviews_sql.csv postgres:reviews_sql.csv
docker exec -ti postgres psql -U postgres -c "\c reviews_db" -c "\COPY reviews FROM '/csv/reviews_sql.csv' DELIMITER ',' CSV HEADER"
# docker exec -ti postgres bash -c "rm reviews_sql.csv"
echo "reviews table seeded"







