const createResponseObject = (type, data) => {
    return {
        [type]: data
    };
}

module.exports = {
    createResponseObject
}