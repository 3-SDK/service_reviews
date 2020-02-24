const express = require('express');

module.exports = () => {
  const router = express.Router();

  router.get('/', async (req, res, next) => {
    try {
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
