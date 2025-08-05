const mongoose = require("mongoose");

const YouthfarmerSchema = new mongoose.Schema({
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
    location: {
        type: String,
        required: true,
    },
    agegroup: {
        type: String,
        required: true,
    },
    nameofbusiness: {
        type: String,
        required: true,
    },
    nin: {
        type: String,
        required: true,
        unique: true, // Ensure NIN is unique
    },
}, { timestamps: true });
module.exports = mongoose.model("Youthfarmer", YouthfarmerSchema);