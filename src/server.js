'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger)


app.get('/person', validator, (req, res) => {
  console.log('validator name', req.name);
  const name = req.query.name;
  res.status(200).json({ name:name });
  
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Listening on ${port}`)
  })


}
module.exports = {
  server: app,
  zeft:start
}