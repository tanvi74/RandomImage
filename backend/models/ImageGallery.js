const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    urlofimage:{
        type: String,
        required: true,
        max: 255,
        min:6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ImageGallery', gallerySchema);