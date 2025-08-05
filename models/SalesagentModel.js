const mongoose = require("mongoose");

const SalesagentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    phonenumber: {
        type: String,
        required: true,
    },
    nin: {       
        type: String,
        required: true,
        unique: true, // Ensure national ID is unique
    },
    assignedarea: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("Salesagent", SalesagentSchema);