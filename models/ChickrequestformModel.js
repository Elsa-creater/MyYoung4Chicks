const mongoose = require("mongoose");

const ChickrequestformSchema = new mongoose.Schema({
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
    deliverylocation: {
        type: String,
        required: true,
    },
    chicktype: {
        type: String,
        required: true,
        enum: ["Layers", "Broilers", "Local"], // Example types, adjust as necessary
    },
    typeoffarmer: {
        type: String,
        required: true,
        enum: ["New Farmer", "Returning Farmer"], // Example types, adjust as necessary
    },
    quantity: {
        type: Number,
        required: true,
    },
    dateoforder: {
        type: Date,
        default: Date.now, // Automatically set to current date if not provided
    },
    preferreddeliverydate: {
        type: Date,
        required: true, 
    },
    additionalnotes: {
        type: String,
        default: "",
    },
}, { timestamps: true });
module.exports = mongoose.model("Chickrequestform", ChickrequestformSchema);
// This model defines the structure of the Chick Request Form data in MongoDB
// and includes fields for the user's full name, email, phone number, delivery location,