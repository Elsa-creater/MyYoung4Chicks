const mongoose = require("mongoose");
const ChickStockSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    ageindays: {
        type: Number,
        required: true,
    },
    stockingdate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("ChickStock", ChickStockSchema);