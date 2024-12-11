import mongoose from "mongoose";

const MaanoSewaSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    answer: {
        type: Date,
        default: Date.now,
    },

})