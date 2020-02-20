const express = require('express');
const reviewsService = require('../../services/reviewsService');

module.exports = () => {
  const router = express.Router();

  router.get('/:reviewId', async (req, res, next) => {
    try {
      const review = await reviewsService.getOne(req.params.reviewId);
      return res.json(review);
    } catch (err) {
      return next(err);
    }
  });



  return router;
};
