const dbHandler = require('../../utils/dbHandler');
const helper = require('../../utils/helper');

const listDevices = async (req, res) => {
    try {
        const devices = await dbHandler.getAllDevices();
        res.status(201).json(helper.createResponseObject('devices', devices));
    } catch (error) {
        const errStatusCode = error.statusCode ? error.statusCode : 500;
        const errMessage = error.message ? error.message : error;
        res.status(errStatusCode).json(helper.createResponseObject('error', errMessage));
    }
}

module.exports = {
    listDevices
}