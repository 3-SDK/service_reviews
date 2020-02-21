const express = require('express');
const usersService = require('../../services/usersService');

module.exports = () => {
  const router = express.Router();

  router.get('/:userId', async (req, res, next) => {
    try {
      const user = await usersService.getOne(req.params.userId);
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
