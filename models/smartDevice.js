const mongoose = require('mongoose');

const SmartDevice = mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: false,
        default: new Date()
    }
});

module.exports = mongoose.model('SmartDevices', SmartDevice);