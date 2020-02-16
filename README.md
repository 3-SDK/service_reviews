# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [API](#API)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## API

POST
- Create a new review for hotel listing ID:
```sh
/reviews/hotels/:hotelId
response: N/A
include params*
```

GET
- Retrieve user information
```sh
/users/:userid
json response: 
{
  id,
  name,
  handle,
  helpful_votes,
  city,
  state,
  avatar_url
}
```
- Retrieve hotel info
```sh
/hotel/:hotelid
json response: 
{
  id,
  name
}
```
- Retrieve reviews response
```sh
/reviews/response/:responseid
json response: 
{
  id,
  name,
  title,
  date,
  text,
}
```
- Retrieve reviews
```sh
/reviews/:reviewid
json response: 
{
  id,
  rating,
  stay_month,
  stay_year,
  traveler_type,
  language,
  review_date,
  review_title,
  review_text,
  helpful_vote_count,
  service,
  sleep_qual,
  value,
  location,
  rooms,
  cleanliness,
  responseId,
}
```
 
- Search for reviews by hotel
```sh
/reviews/search?hotel=:hotelid
array of objects (see above reviews json)
```

- Search for reviews by month and hotel
```sh
/reviews/search?hotel=:hotelid&?month=:month
array of objects (see above reviews json)
```

- Search for reviews by rating and hotel
```sh
/reviews/search?hotel=:hotelid&?rating=:rating
array of objects (see above reviews json)
```

- Search for reviews by traveler type and hotel
```sh
/reviews/search?hotel=:hotelid&?travelertype=:travelertype
array of objects (see above reviews json)
```

- Search for reviews by language and hotel
```sh
/reviews/search?hotel=:hotelid&?lanuage=:language
array of objects (see above reviews json)
```

PUT
- Update review for specific hotel listing ID and review ID:
```sh
/reviews/update?=reviewid=:reviewid&userid=:userid
include whichever params* applicable
response: none
```

DELETE
- Delete a review for specific hotel listing ID and review ID:
```sh
/reviews/delete?=reviewid=:reviewid&userid=:userid
response: none
```

```sh
*params: {
  username,
  review_date,
  rating,
  review_title,
  review_text,
  stay_date,
  trip_type,
  language,
  *hotel_ratings:[
    service,
    location,
    sleep_quality,
    value,
  ],
  *expensive,
  helpful_vote,
  *response: [
    name,
    title,
    response_date,
    response_text
  ],
}

* denotes optional field
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

