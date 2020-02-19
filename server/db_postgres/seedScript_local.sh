# create reviews_db database
psql postgres -c "CREATE DATABASE reviews_db;"

# create users table
psql postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS users(id int PRIMARY KEY, name varchar(255), handle varchar(255), helpful_votes int, city varchar(255), state varchar(255), avatar_url varchar(255));"

# create hotels table
psql postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS hotels(id int PRIMARY KEY, name varchar(255));"

# create response table
psql postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS response(id int PRIMARY KEY, name varchar(255), title varchar(255), date date, text varchar(255));"

# create reviews table
psql postgres -c "\c reviews_db" -c "CREATE TABLE IF NOT EXISTS reviews(id int PRIMARY KEY, userId int, hotelId int, responseId varchar(255), rating varchar(255),stay_month varchar(255),stay_year varchar(255),traveler_type varchar(255),language varchar(255),review_date date,review_title varchar(255),review_text varchar(255),helpful_vote_count int,service int,sleep_qual int,value int,location int,rooms int,cleanliness int);"

###### users table #########
psql postgres -c "\c reviews_db" -c "\COPY users FROM '/Users/deanma/SDC/users.csv' DELIMITER ',' CSV HEADER"
echo "users table seeded"

###### hotels table #########
psql postgres -c "\c reviews_db" -c "\COPY hotels FROM '/Users/deanma/SDC/hotels.csv' DELIMITER ',' CSV HEADER"
echo "hotels table seeded"

###### response table #########
psql postgres -c "\c reviews_db" -c "\COPY response FROM '/Users/deanma/SDC/response.csv' DELIMITER ',' CSV HEADER"
echo "response table seeded"

###### reviews table #########
psql postgres -c "\c reviews_db" -c "\COPY reviews FROM '/Users/deanma/SDC/reviews_sql.csv' DELIMITER ',' CSV HEADER"
echo "reviews table seeded"







