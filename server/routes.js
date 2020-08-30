const express = require('express');
const router = express.Router();
const validate = require('express-validation').validate;

const addDeviceHandler = require('./handlers/addDevice').addDevice;
const addDeviceValidator = require('./handlers/addDevice').addDeviceValidator;
const listDevicesHandler = require('./handlers/listDevices').listDevices;
const patchDeviceHandler = require('./handlers/patchDevice').patchDevice;
const patchDeviceValidator = require('./handlers/patchDevice').patchDeviceValidator;
const removeDeviceHandler = require('./handlers/removeDevice').removeDevice;
const removeDeviceValidator = require('./handlers/removeDevice').removeDeviceValidator;

router.post('/addDevice', validate(addDeviceValidator), addDeviceHandler);

router.get('/listDevices', listDevicesHandler);

router.patch('/updateDeviceData', validate(patchDeviceValidator), patchDeviceHandler);

router.delete('/removeDevice', validate(removeDeviceValidator), removeDeviceHandler);

module.exports = router;