counter=1
until [ $counter -gt 101 ]
do
# copy into docker
docker cp /home/ubuntu/reviews2_split/r$counter.csv cas1:r$counter.csv

# seed it
docker exec -ti cas1 bash -c "/cassandra-loader -f /r$counter.csv -maxInsertErrors 1000 -numRetries 1000 -queryTimeout 120 -numThreads 2 -host 172.17.0.2 -schema \"reviews_keyspace.reviews_by_hotel2(id,user_name,user_handle,user_helpful_votes,user_city,user_state,user_avatar_url,rating,stay_month,stay_year,traveler_type,language,review_date,review_title,review_text,helpful_vote_count,service,sleep_qual,value,location,rooms,cleanliness,response_name,response_title,response_date,response_text,hotelId)\""

# remove it
docker exec -ti cas1 bash -c "rm r$counter.csv"

echo "r$counter seeded"

((counter++))
done
echo All done
