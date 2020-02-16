# docker exec -ti cas0 cqlsh -e "COPY reviews_keyspace.users(id,name,handle,helpful_votes,city,state,avatar_url) FROM 'users.csv' WITH DELIMITER=',' AND HEADER=TRUE;" > ~/output



docker exec -ti cas0 cqlsh -e "describe keyspaces"

docker exec -ti cas0 cqlsh -e "describe keyspaces"
