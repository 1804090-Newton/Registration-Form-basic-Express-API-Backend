var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String, // Corrected the type to String
        required: true
    },
    password: {
        type: String, // Corrected the type to String
        required: true
    }
});

module.exports = mongoose.model('employee', employeeSchema);
