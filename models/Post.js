const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const postSchema = new Schema({
    poster: {
        type: Object,
        required: true
    },

    contents: {
        type: String,
        required: true
    },

    liked: {
        type: Boolean,
        required: true
    }
}, { collection: 'Posts', timestamps: true })

module.exports = mongoose.model('Post', postSchema)