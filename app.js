const express = require('express');
const app = express();

const routes = require('./server/routes');

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json(err);
})

module.exports = app;