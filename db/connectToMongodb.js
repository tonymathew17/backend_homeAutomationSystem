const mongoose = require('mongoose');
const mongoURL = require('../config/mongo.config.json').url;

const connect = () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(mongoURL, options, (err, data) => {
        if (err) {
            console.log(`There was an error connecting to MongoDb: ${err}`);
        } else {
            console.log(`Connected to MongoDB! ${data.connections[0]._connectionString}`);
        }
    });
}

module.exports = connect;