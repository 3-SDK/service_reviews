const express = require('express');
const path = require('path');

const app = express();
const port = 3001;
const db = require('./db.js');
const compression = require('compression');
const controllers = require('./controllers');
const models = require('./models');


// TODO: server side rendering
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(compression());

// server side render with all reviews
app.get('/reviews/hotels/:hotelId', async (req, res) => {
  const { hotelId } = req.params;
  const reviews = await models.getAll(hotelId);

  return res.render('reviews', { reviews });
});

// search route
app.post('/reviews/hotels/:hotelId/search', controllers.reviews.search);

// post one review
app.post('/reviews/hotels/:hotelId', controllers.reviews.post);

// GET all reviews
app.get('/reviews/hotels/:hotelId/all', controllers.reviews.getAll);

// GET one review
app.get('/reviews/hotels/:hotelId/:reviewId', controllers.reviews.get);

// DELETE one review
app.delete('/reviews/hotels/:hotelId/:reviewId', controllers.reviews.remove);

// PUT one review
app.put('/reviews/hotels/:hotelId/:reviewId', controllers.reviews.update);

app.use((req, res, next) => {
  console.log(req);
  res.sendStatus(404);
  // res.render('error');
});


// legacy code:
// app.get("/reviews/hotels/:hotelId", (req, res) => {
//   db.getReviewsbyID(req.params.hotelId, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.listen(port, () => console.log(`App listening on port ${port}!`));
