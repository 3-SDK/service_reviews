const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const db = require("./db.js");
const compression = require("compression");
const controllers = require('./controllers');

app.use("/:id", express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(compression());


app.post('/reviews/hotels/:hotelId', controllers.reviews.post);

// GET all reviews
app.get('/reviews/hotels/:hotelId', controllers.reviews.getAll);

// GET one review
app.get('/reviews/hotels/:hotelId/:reviewId', controllers.reviews.get);

// DELETE one review
app.delete('/reviews/hotels/:hotelId/:reviewId', controllers.reviews.get);

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
