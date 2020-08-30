# Home  Automation System

Backend NodeJS Application to handle the following scenarios:  
1. List all smart devices  
2. Add new smart device  
3. Perform an operation on a device  
4. Remove an installed device 

## Installation

1. Install [Node](https://nodejs.org/en/download/)
2. Install [Mongodb](https://www.mongodb.com/try/download/community)
2. Clone the [repo](https://github.com/tonymathew17/backend_homeAutomationSystem.git)
3. Go inside backend_homeAutomationSystem folder and do:   
```npm install```
5. Make sure mongodb is running in background
6. Once node module installation is done and mongodb has started, open cmd in the same directory and do:  
```npm start```



## API defintion:
#### Each API defined below has two levels of validation:  
```express-validation```: Used as a middleware function to validate incoming requests before the data is processed.  
```Mongoose Schema Validation```: This does the second level of validation, where the incoming requests are validated before any database operations
#### 1. addDevice:  
 This API is used to add a new device.   
#### Request details:  
```
METHOD: POST  
URL: http://localhost:3000/addDevice  
Body:  
{
    "device":"OnePlus TV",
    "manufacturer":"OnePlus",
    "deviceType": "SmartTV",
    "specifications":[{
        "battery":"30000mAh"
    }],
    "warrantyExpiry":"2022-08-30T13:35:44.121Z"
}
```  
/addDevice API if successful, will return the unique id of the device saved, else will return an error. The id generated can be used in /removeDevice and /updateDeviceData APIs
#### 2. listDevices  
This API is used to list all the devices that are saved in db.  
#### Request details:  
```
METHOD: GET
URL: http://localhost:3000/listDevices  
```   
#### 3. removeDevice  
This API is used to remove a device from db.  
#### Request details:  
```
METHOD: DELETE  
URL: http://localhost:3000/removeDevice?deviceId=deviceID
```    
To remove a device, you need to pass the deviceId in query params  
#### 4. updateDeviceData  
This API is used to update a particular devices data in db.  
#### Request details:  
```
METHOD: PATCH  
URL: http://localhost:3000/updateDeviceData
Body:  
{
    "deviceId": "8224e146-8260-4e79-aab8-b85a9adac009",
    "update": {
        "manufacturer": "Samsung"
    }
}
```    
## Libraries used  
- [express](https://www.npmjs.com/package/express) - Web Application Framework used to expose APIs 
- [express-validation](https://www.npmjs.com/package/express-validation)- Used as a middleware function to validate incoming requests before the data is processed.
- [http](https://www.npmjs.com/package/http) - To create HTTP server
- [mongoose](https://www.npmjs.com/package/mongoose) - To create Schema and validate data to be saved in db
- [uuid](https://www.npmjs.com/package/uuid) - To generate unique id for the smart devices