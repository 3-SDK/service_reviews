require('newrelic');

const express = require('express');
const path = require('path');
const compression = require('compression');
const routeHandler = require('./routes');

const app = express();
const port = 3000;
app.use(compression());
app.use(express.json());

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.use('/', routeHandler());

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
