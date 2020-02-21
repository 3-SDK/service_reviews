const express = require('express');
const responseService = require('../../services/responseService');

module.exports = () => {
  const router = express.Router();

  router.get('/:responseId', async (req, res, next) => {
    try {
      const response = await responseService.getOne(req.params.responseId);
      return res.json(response);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
