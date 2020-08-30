const express = require('express');
const app = express();

const routes = require('./server/routes');

app.use(express.json());
app.use(routes);

module.exports = app;