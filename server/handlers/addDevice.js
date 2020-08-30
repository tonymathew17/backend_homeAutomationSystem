const { Joi, validation } = require('express-validation');
const { v4: uuidv4 } = require('uuid');

const dbHandler = require('../../utils/dbHandler');
const helper = require('../../utils/helper');

const addDevice = async (req, res) => {
    try {
        let deviceData = req.body;
        const deviceId = uuidv4();
        deviceData.id = deviceId;
        await dbHandler.addDevice(req.body);
        res.status(201).json(helper.createResponseObject('deviceId', deviceId));
    } catch (error) {
        const errStatusCode = error.statusCode ? error.statusCode : 500;
        const errMessage = error.message ? error.message : error;
        res.status(errStatusCode).json(helper.createResponseObject('error', errMessage));
    }
}

module.exports = {
    addDevice
}