const express = require('express');
const hotelsService = require('../../services/hotelsService');
const reviewsService = require('../../services/reviewsService');
const usersService = require('../../services/usersService');
const fake = require('../../../server/csv_generators/fake_data');

module.exports = () => {
  const router = express.Router();

  router.get('/:hotelId', async (req, res, next) => {
    try {
      const hotel = await hotelsService.getOne(req.params.hotelId);
      return res.json(hotel);
    } catch (err) {
      return next(err);
    }
  });

  router.post('/:hotelId/review', async (req, res, next) => {
    try {
      const hotel = await hotelsService.getOne(req.params.hotelId);
      const user = await usersService.getOne(req.body.userId);

      if (hotel.rowLength === 0) {
        return res.sendStatus(404);
      }

      if (user.rowLength === 0) {
        return res.sendStatus(404);
      }

      const userParsed = JSON.parse(user.rows[0]["[json]"]);
      const b = req.body;
      const service = b.service || 0;
      const sleep_qual = b.sleep_qual || 0;
      const value = b.value || 0;
      const location = b.location || 0;
      const rooms = b.rooms || 0;
      const cleanliness = b.cleanliness || 0;
      const id = fake.randomNum(1e8 + 1, 1e9);
      const params = [req.params.hotelId, b.review_date, cleanliness, 0, id, b.language, location, b.rating, b.review_text, b.review_title, rooms, service, sleep_qual, b.stay_month, b.stay_year, b.traveler_type, userParsed.avatar_url, userParsed.city, userParsed.handle, userParsed.helpful_votes, userParsed.name, userParsed.state, value];

      const postReviewTbl1 = await reviewsService.postOne('reviews', params);
      const postReviewTbl2 = await reviewsService.postOne('reviews_by_hotel', params);

      return res.sendStatus(201);
    } catch (err) {
      return next(err);
    }
  });

  router.put('/:hotelId/review/update', async (req, res, next) => {
    try {
      if (!req.query.reviewid || !req.params.hotelId || !req.query.userid) {
        return res.sendStatus(404);
      }

      const user = await usersService.getOne(req.query.userid);
      if (user.rowLength === 0) {
        return res.sendStatus(404);
      }

      const hotel = await hotelsService.getOne(req.params.hotelId);
      if (hotel.rowLength === 0) {
        return res.sendStatus(404);
      }

      const review = await reviewsService.getOne(req.query.reviewid);
      if (review.rowLength === 0) {
        return res.sendStatus(404);
      }

      const reviewParsed = JSON.parse(review.rows[0]['[json]']);
      const userParsed = JSON.parse(user.rows[0]['[json]']);

      const b = req.body;
      const rating = b.rating || reviewParsed.rating;
      const stay_month = b.stay_month || reviewParsed.stay_month;
      const stay_year = b.stay_year || reviewParsed.stay_year;
      const traveler_type = b.traveler_type || reviewParsed.traveler_type;
      const language = b.language || reviewParsed.language;
      const review_date = b.review_date || reviewParsed.review_date;
      const review_title = b.review_title || reviewParsed.review_title;
      const review_text = b.review_text || reviewParsed.review_text;
      const service = b.service || reviewParsed.service;
      const sleep_qual = b.sleep_qual || reviewParsed.sleep_qual;
      const value = b.value || reviewParsed.value;
      const location = b.location || reviewParsed.location;
      const rooms = b.rooms || reviewParsed.rooms;
      const cleanliness = b.cleanliness || reviewParsed.cleanliness;
      const { helpful_vote_count } = reviewParsed;

      const params = [req.params.hotelId, review_date, cleanliness, helpful_vote_count, req.query.reviewid, language, location, rating, review_text, review_title, rooms, service, sleep_qual, stay_month, stay_year, traveler_type, userParsed.avatar_url, userParsed.city, userParsed.handle, userParsed.helpful_votes, userParsed.name, userParsed.state, value];

      const updateReviewTbl1 = await reviewsService.postOne('reviews', params);
      const updateReviewTbl2 = await reviewsService.postOne('reviews_by_hotel', params);

      return res.sendStatus(201);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
