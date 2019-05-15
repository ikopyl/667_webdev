/** @author Ilya Kopyl
 * @email ikopyl@mail.sfsu.edu */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config');

const routes = require('./routes/lookupmusicbandRoutes');

const app = express();
const PORT = config.LOOKUPMUSICBAND_PORT;

// const DB_URL =
//   process.env.LOOKUPMUSICBAND_DB_URL || 'mongodb://localhost:27017';
// const DB_NAME = process.env.LOOKUPMUSICBAND_DB_NAME || 'finalProject';

app.listen(PORT, () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`${config.MONGODB_URI}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
});

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Microservice lookupmusicband started on port ${PORT}`);
});

db.on('connected', () => {
  console.log(`Mongoose connection was established on ${config.MONGODB_URI}`);
});

db.on('error', (err) => {
  console.log(`Unable to establish a mongoose connection due to ${err}`);
});

db.on('disconnected', () => {
  console.log(
    `Mongoose connection on ${config.MONGODB_URI} has been disconnected`
  );
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log(
      `Mongoose connection has been disconnected due to application termination`
    );
    process.exit(0);
  });
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const response =
    'This endpoint queries iTunes API and returns music metadata. </br>' +
    'Examples of supported APIs: </br>' +
    '/search?name=the beatles </br>' +
    '/search_results</br>' +
    '/search_result?name=the beatles </br>' +
    '/search_result/{search_result_id} </br>' +
    '/search_results/{search_result_id} </br>';
  res.end(response);
});
