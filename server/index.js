require('newrelic');
const http = require('http');
const express = require('express');
const path = require('path');
const compression = require('compression');
const routeHandler = require('./routes');

const app = express();
const port = 3000;
http.globalAgent.keepAlive = true;

app.use(compression());
app.use(express.json());

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.use('/', routeHandler());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found (${req.url})`);
  console.log(err);
  next(err);
});

app.use((err, req, res) => {
  res.sendStatus(404);
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

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

server.keepAliveTimeout = 60000;

server.on('connection', (socket) => {
  console.log('A new connection was made by a client.');
  socket.setTimeout(60 * 1000);
});
