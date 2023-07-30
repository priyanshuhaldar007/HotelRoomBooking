const mongoose = require("mongoose");

const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
};

const HistorySchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
    },
    hotelId: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    Duration: {
        type: String,
        required: true,
    },
    roomId: {
        type: String,
        required: true,
    },
    BookDate: {
        type: String,
        default: getCurrentDate,
    },
    City: {
        type: String,
        required: true,
    },
    personQty: {
        type: Number,
        required: true,
    },
    TPrice: {
        type: Number,
        required: true,
    },
});

const History = mongoose.model("bookingHistory", HistorySchema);

module.exports = History;
