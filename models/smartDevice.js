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
    manufacturer: {
        type: String,
        required: true
    },
    deviceType: {
        type: String,
        required: true
    },
    specifications: {
        type: Array,
        required: true
    },
    warrantyExpiry: {
        type: Date,
        required: true
    },
    timestamp: {
        type: Date,
        required: false,
        default: new Date()
    }
});

module.exports = mongoose.model('SmartDevices', SmartDevice);