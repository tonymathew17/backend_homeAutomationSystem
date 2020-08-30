const Joi = require('express-validation').Joi;
const dbHandler = require('../../utils/dbHandler');
const helper = require('../../utils/helper');

const removeDeviceValidator = {
    query: Joi.object({
        deviceId: Joi.string().guid().required()
    })
}
const removeDevice = async (req, res) => {
    try {
        const deviceId = req.query.deviceId;
        const removedDevice = await dbHandler.removeDevice(deviceId);
        res.status(200).json(helper.createResponseObject('removedDevice', removedDevice));
    } catch (error) {
        const errStatusCode = error.statusCode ? error.statusCode : 500;
        const errMessage = error.message ? error.message : error;
        res.status(errStatusCode).json(helper.createResponseObject('error', errMessage));
    }
}

module.exports = {
    removeDevice,
    removeDeviceValidator
}