const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    followers: {
        type: Number,
        required: true,
    },

    following: {
        type: Number,
        required: true,
    },

    profileImageUrl: {
        type: String,
        required: true,
    },

    bio: {
        type: String,
        required: true,
    }

}, { collection: "Users", timestamps: true })

module.exports = mongoose.model('User', userSchema)