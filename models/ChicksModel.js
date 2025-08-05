const mongoose = require("mongoose");

const ChicksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    pricePerChick: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    healthStatus: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Chicks", ChicksSchema);