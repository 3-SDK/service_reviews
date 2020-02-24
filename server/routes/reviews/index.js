const express = require('express');
const reviewsService = require('../../services/reviewsService');
const redis_client = require('../../db/redis');

const idBuilder = (hotel, page, month, rating, travelerType, language) => {
  let result = '';

  result += `h${hotel}p${page}`;

  if (month !== undefined) {
    result += `m${month}`;
  }

  if (rating !== undefined) {
    result += `r${rating}`;
  }

  if (travelerType !== undefined) {
    result += `t${travelerType}`;
  }

  if (language !== undefined) {
    result += `l${language}`;
  }

  return result;
};

module.exports = () => {
  const router = express.Router();

  const checkCache = (req, res, next) => {
    const page = Number(req.query.page) * 5;
    const { hotel } = req.query;
    const { month } = req.query;
    const { rating } = req.query;
    const { travelerType } = req.query;
    const { language } = req.query;

    redis_client.get(idBuilder(hotel, page, month, rating, travelerType, language), (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      if (data != null) {
        res.send(data);
      } else {
        next();
      }
    });
  };

  router.get('/search', checkCache, async (req, res, next) => {
    try {
      const page = Number(req.query.page) * 5;
      const { hotel } = req.query;
      const { month } = req.query;
      const { rating } = req.query;
      const { travelerType } = req.query;
      const { language } = req.query;
      const id = idBuilder(hotel, page, month, rating, travelerType, language);

      if (hotel && month) {
        const reviews = await reviewsService.getAllByHotelIdAndFilter('reviews_by_time_year_and_hotel', 'stay_month', month, hotel, page);
        redis_client.setex(id, 3600, JSON.stringify(reviews.rows));
        return res.json(reviews.rows);
      }

      if (hotel && rating) {
        const reviews = await reviewsService.getAllByHotelIdAndFilter('reviews_by_rating_and_hotel', 'rating', rating, hotel, page);
        redis_client.setex(id, 3600, JSON.stringify(reviews.rows));
        return res.json(reviews.rows);
      }

      if (hotel && travelerType) {
        const reviews = await reviewsService.getAllByHotelIdAndFilter('reviews_by_traveler_type_and_hotel', 'traveler_type', travelerType, hotel, page);
        redis_client.setex(id, 3600, JSON.stringify(reviews.rows));
        return res.json(reviews.rows);
      }

      if (hotel && language) {
        const reviews = await reviewsService.getAllByHotelIdAndFilter('reviews_by_language_and_hotel', 'language', language, hotel, page);
        redis_client.setex(id, 3600, JSON.stringify(reviews.rows));
        return res.json(reviews.rows);
      }

      const reviews = await reviewsService.getAllByHotelId(hotel, page);
      redis_client.setex(id, 3600, JSON.stringify(reviews.rows));
      return res.json(reviews.rows);
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:reviewId', async (req, res, next) => {
    try {
      const review = await reviewsService.getOne(req.params.reviewId);
      return res.json(review);
    } catch (err) {
      return next(err);
    }
  });

  router.delete('/delete', async (req, res, next) => {
    try {
      const { reviewid } = req.query;
      const review = await reviewsService.getOne(reviewid);

      if (review.rowLength === 0) {
        return res.sendStatus(404);
      }

      const { hotelid } = JSON.parse(review.rows[0]["[json]"]);
      const removeReview = await reviewsService.removeReview(reviewid);
      const removeReview2 = await reviewsService.removeReviewByHotel(reviewid, hotelid);

      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
