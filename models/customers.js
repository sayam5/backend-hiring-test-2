const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    custName: {
        type: String,
        required: true
    },
    accountNo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    initialDeposit: {
        type: Number,
        required: true
    }

});
const Customer = new mongoose.model("Customer", customerSchema);
module.exports = Customer;