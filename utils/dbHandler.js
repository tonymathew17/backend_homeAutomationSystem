const deviceModel = require('../models/smartDevice');


const getAllDevices = async () => {
    const projection = {
        _id: 0
    }
    try {
        return await deviceModel.find({}, projection)
    } catch (error) {
        console.log(`There was an error getting device details from db: ${JSON.stringify(error)}`);
        return Promise.reject(error);
    }
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

const updateDevice = async (deviceId, updateData) => {
    try {
        return await deviceModel.findOneAndUpdate({ deviceId }, updateData)
    } catch (error) {
        console.log(`There was an error updating device data in db: ${JSON.stringify(error)}`);
        return Promise.reject(error);
    }
};

const removeDevice = async (deviceId) => {
    try {
        return await deviceModel.findOneAndDelete({ deviceId })
    } catch (error) {
        console.log(`There was an error removing device data from db: ${JSON.stringify(error)}`);
        return Promise.reject(error);
    }
}

module.exports = {
    getAllDevices,
    addDevice,
    updateDevice,
    removeDevice
}

