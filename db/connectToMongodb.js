const mongoose = require('mongoose');
const mongoURL = require('../config/mongo.config.json').url;

const connect = () => {
    mongoose.connect(mongoURL, (err, data) => {
        if (err) {
            console.log(`There was an error connecting to MongoDb: ${err}`);
        } else {
            console.log(`Connected to MongoDB! ${data._connectionString}`);
        }
    });
}

module.exports = connect;