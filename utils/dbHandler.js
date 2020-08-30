const deviceModel = require('../models/smartDevice');


const getAllDevices = (deviceId) => {

};

const addDevice = async (deviceData) => {
    try {
        let deviceDoc = new deviceModel(deviceData);
        return await deviceDoc.save();
    } catch (error) {
        console.log(`There was an error saving new device data to db: ${JSON.stringify(error)}`);
        return Promise.reject(error);
    }
};

const updateDevice = (deviceData) => {

};

const removeDevice = (deviceId) => {

}

module.exports = {
    getAllDevices,
    addDevice,
    updateDevice,
    removeDevice
}

