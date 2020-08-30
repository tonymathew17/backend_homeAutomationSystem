const express = require('express');
const router = express.Router();

const addDeviceHandler = require('./handlers/addDevice').addDevice;
const addDeviceValidator = require('./handlers/addDevice');
const listDevicesHandler = require('./handlers/listDevices').listDevices;
const listDevicesValidator = require('./handlers/listDevices');
const patchDeviceHandler = require('./handlers/patchDevice').patchDevice;
const patchDeviceValidator = require('./handlers/patchDevice');
const removeDeviceHandler = require('./handlers/removeDevice').removeDevice;
const removeDeviceValidator = require('./handlers/removeDevice');

router.post('/addDevice', addDeviceHandler);

router.get('/listDevices', (req, res) => {

});

router.patch('/device/:id', (req, res) => {

});

router.delete('/device/:id', (req, res) => { 

});

module.exports = router;