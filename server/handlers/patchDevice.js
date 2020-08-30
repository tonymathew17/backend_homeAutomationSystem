const Joi = require('express-validation').Joi
const dbHandler = require('../../utils/dbHandler');
const helper = require('../../utils/helper');

const patchDeviceValidator = {
    body: Joi.object({
        deviceId: Joi.string().guid().required(),
        update: Joi.object().required()
    })
}

const patchDevice = async (req, res) => {
    try {
        const deviceId = req.body.deviceId;
        const updateData = req.body.update;
        const updateDeviceData = await dbHandler.updateDevice(deviceId, updateData);
        if(!updateDeviceData){
            throw Error('No device found in db with the given device id');
        }
        res.status(200).json(helper.createResponseObject('updatedDevice', updateDeviceData));
    } catch (error) {
        const errStatusCode = error.statusCode ? error.statusCode : 500;
        const errMessage = error.message ? error.message : error;
        res.status(errStatusCode).json(helper.createResponseObject('error', errMessage));
    }
}

module.exports = {
    patchDevice,
    patchDeviceValidator
}