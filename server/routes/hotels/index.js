const express = require('express');
const hotelsService = require('../../services/hotelsService');

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

  return router;
};
