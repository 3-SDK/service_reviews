const models = require('../models');

module.exports = {
  reviews: {
    post: async (req, res, next) => {
      try {
        const { hotelId } = req.params;
        const data = req.body;
        const reviews = await models.reviews.post(hotelId, data);
        return res.sendStatus(201);
      } catch (err) {
        return next(err);
      }
    },
    getAll: async (req, res, next) => {
      try {
        const { hotelId } = req.params;
        const reviews = await models.reviews.getAll(hotelId);
        return res.json(reviews);
      } catch (err) {
        return next(err);
      }
    },
    get: async (req, res, next) => {
      try {
        const { hotelId } = req.params;
        const { reviewId } = req.params;

        const review = await models.reviews.get(hotelId, reviewId);
        return res.json(review);
      } catch (err) {
        return next(err);
      }
    },
    remove: async (req, res, next) => {
      try {
        const { hotelId } = req.params;
        const { reviewId } = req.params;

        const reviews = await models.reviews.remove(hotelId, reviewId);
        return res.sendStatus(200);
      } catch (err) {
        return next(err);
      }
    },
    update: async (req, res, next) => {
      try {
        const { hotelId } = req.params;
        const { reviewId } = req.params;
        const data = req.body;

        const reviews = await models.reviews.update(hotelId, reviewId, data);
        return res.sendStatus(200);
      } catch (err) {
        return next(err);
      }
    },
  },
};
