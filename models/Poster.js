const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posterSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    profileImageUrl: {
        tyoe: String,
        required: true
    }
})