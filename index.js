const express = require('express');
const consign = require('consign');
const debug = require('debug')('app:startup');

const app = express();

require('./startup/mongo')();
require('./startup/logger')(app);
require('./startup/parser')(app);

consign({ verbose: false })
  .include('controllers')
  .then('routes')
  .into(app);

require('./middlewares/errors')(app);

process.on('uncaughtException', err => {
  debug(err);
});

process.on('unhandledRejection', err => {
  throw err;
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listen on port ${port}...`);
});
