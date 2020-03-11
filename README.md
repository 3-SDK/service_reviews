# Trip Consultant

> Reviews component of a travel destination website. Express.js server, Cassandra database. 

This was a 3 week long project. Ultimate goal was to build out, deploy, and scale out a backend architecture that would be able to handle a large amount of burst traffic. Stress testing was accomplished via loader.io and metrics taken from loader.io / newrelic. 


## System Design

<img src="https://imgur.com/a/OUr3ZOT">


## Related Repos

  - https://github.com/3-SDK/ImageGallery_Service
  - https://github.com/3-SDK/service_calendar


## Table of Contents

1. [Usage](#Usage)
1. [API Reference](#API)
1. [Setup](#setup)

## API
### Users
- Retrieve a user
```sh
GET /users/:id
Arguments: none
Returns: user object if a valid identifier was provided
Response:
  {
    "id": string,
    "name": string,
    "handle": string,
    "helpful_votes": int,
    "city": string,
    "state": string,
    "avatar_url": string,
  }
```
### Hotels
- Retrieve a hotel
```sh
GET /hotels/:id
Arguments: none
Returns: hotel object if a valid identifier was provided
Response:
  {
    "id": string,
    "name": string,
  }
```

### Review response
- Retrieve a response for a particular review
```sh
GET /response/:id
Arguments: none
Returns: response object if a valid identifier was provided
Response:
  {
    "id": string,
    "name": string,
    "title": string,
    "date": string,
    "text": string,
  }
```

### Reviews
- Retrieve a review
```sh
GET /reviews/:id
Arguments: none
Returns: review object if a valid identifier was provided
Response:
  {
    "id": string,
    "user_name": string,
    "user_handle": string,
    "user_helpful_votes": int,
    "user_city": string,
    "user_state": string,
    "user_avatar_url": string,
    "rating": int,
    "stay_month": string,
    "stay_year": string,
    "traveler_type": string,
    "language": string,
    "review_date": date,
    "review_title": string,
    "review_text": string,
    "helpful_vote_count": int,
    "service": int,
    "sleep_qual": int,
    "value": int,
    "location": int,
    "rooms": int,
    "cleanliness": int,
    "response_name": string,
    "response_title": string,
    "response_date": string,
    "response_text": string,
    "hotelId": int,
  }
```
- Retrieve reviews (descending order by review post date)
```sh
GET /reviews/search?hotel=:hotelid&page=:page
Arguments: none
Returns: a dictionary with an array of up to LIMIT (5 * page number)
```

- Retrieve reviews for a particular stay month (descending order by review post date)
```sh
GET /reviews/search?hotel=:hotelid&?month=:month&page=:page
Arguments: none
Returns: a dictionary with an array of up to LIMIT (5 * page number)

example: For reviews of a particular hotel with stay month in Jan and Feb
GET /reviews/search?hotel=315&?month=1,2&page=1
```

- Retrieve reviews for a particular rating (descending order by review post date)
```sh
GET /reviews/search?hotel=:hotelid&?rating=:rating&page=:page
Arguments: none
Returns: a dictionary with an array of up to LIMIT (5 * page number)

Ratings: [1,2,3,4,5]
```

- Retrieve reviews for a particular traveler type (descending order by review post date)
```sh
GET /reviews/search?hotel=:hotelid&?travelertype=:travelertype&page=:page
Arguments: none
Returns: a dictionary with an array of up to LIMIT (5 * page number)

Traveler types: ['Families', 'Couples', 'Solo', 'Business', 'Friends']
```

- Retrieve reviews for a particular language (descending order by review post date)
```sh
GET /reviews/search?hotel=:hotelid&?language=:language&page=:page
Arguments: none
Returns: a dictionary with an array of up to LIMIT (5 * page number)

Languages: ['az', 'cz', 'de', 'en', 'es', 'fa', 'fr', 'ge', 'it', 'ja', 'ko', 'nl', 'pl', 'ru', 'sk', 'sv', 'tr', 'vi', 'zh_CN', 'zh_TW']
```

- Delete a review
```sh
DELETE /reviews/delete?reviewid=:id&userid=:id
Arguments: none
Returns: 200 OK (on success)
```

- Post a review
```sh
POST /hotels/:hotelid/review
Arguments: 
  {
    "userId": id of the user
    "rating": rating for the hotel (ranging from 1 to 5)
    "stay_month"
    "stay_year" 
    "traveler_type"
    "language": ISO 2 Letter Language Code
    "review_date": in YYYY-MM-DD format
    "review_title"
    "review_text"
    "service": Optional. rating for the hotel (ranging from 1 to 5),
    "sleep_qual": Optional. rating for the hotel (ranging from 1 to 5),
    "value": Optional. rating for the hotel (ranging from 1 to 5),
    "location": Optional. rating for the hotel (ranging from 1 to 5),
    "rooms": Optional. rating for the hotel (ranging from 1 to 5),
    "cleanliness": Optional. rating for the hotel (ranging from 1 to 5),
  }
Returns: 201 OK (on success)
```

- Update a review
```sh
PUT /hotels/:hotelid/review/update?reviewid=:id&userid=:id
Arguments: any combination of the following fields that require updating
  {
    "rating"
    "stay_month"
    "stay_year" 
    "traveler_type"
    "language"
    "review_date"
    "review_title"
    "review_text"
    "service"
    "sleep_qual"
    "value"
    "location"
    "rooms"
    "cleanliness"
  }
Returns: 201 OK (on success)
```

## Setup

From within the root directory:

```sh
npm install
```

