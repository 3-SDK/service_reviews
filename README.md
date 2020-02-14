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
response: json
include params
```
- Grab the reviews in batches of five, filtered by parameters
```sh
/reviews/hotels/:hotelId/search
response: json

params: {
  page_number,
  traveler_rating:['Excellent', ....],
  time_of_year: ['Mar-May',....],
  traveler_type: ['Families',...],
  language: ['English',...],
}
```

GET
- Retrieve all reviews for specific hotel listing ID:
```sh
/reviews/hotels/:hotelId/all
response: json
```
- Render reviews for specific hotel listing ID:
```sh
/reviews/hotels/:hotelId
```

PUT
- Update review for specific hotel listing ID and review ID:
```sh
/reviews/hotels/:hotelId/:reviewId
include params
response: none
```

DELETE
- Delete a review for specific hotel listing ID and review ID:
```sh
/reviews/hotels/:hotelId/:reviewId
response: none
```

```sh
params: {
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

