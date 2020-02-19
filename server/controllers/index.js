const models = require('../models');

module.exports = {
  reviews: {
    search: async (req, res, next) => {
      // implement search
      try {
        const { hotelId } = req.params;
        const filter = req.body;
        const reviews = await models.reviews.search(hotelId, filter);
        return res.json(reviews);
      } catch (err) {
        return next(err);
      }
    },
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
  users: {
    get: async (req, res, next) => {
      try {
        const { userId } = req.params;

        const user = await models.reviews.get(hotelId, reviewId);
        return res.json(review);
      } catch (err) {
        return next(err);
      }
    },
  }
};
