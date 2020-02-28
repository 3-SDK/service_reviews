
# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output

# docker exec -ti cas0 cqlsh -e "create keyspace reviews_keyspace with replication = {'class':'SimpleStrategy','replication_factor':1}"

# docker exec -ti cas1 bash -c "ls"

# sleep 1

# docker exec -ti cas0 cqlsh -e "drop keyspace reviews_keyspace"
# # echo "keyspace dropped"


# docker exec -ti postgres psql -U postgres -c ""


counter=1
until [ $counter -gt 101 ]
do
echo $counter
((counter++))
done
echo All done