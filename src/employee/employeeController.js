var EmployeeModel = require('./employeeModel');

var createUserControllerFn = async (req, res) => {
    try {
        const { name, address, phoneNumber, email, password } = req.body;
        const employeeModelData = new EmployeeModel({
            name,
            address,
            phoneNumber,
            email,
            password
        });

        await employeeModelData.save();
        res.status(200).json({
            "success": true,
            employeeModelData
        });
    } catch (err) { 
        res.status(400).send(err); 
    }
}

module.exports = { createUserControllerFn };
