const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:String,
    releaseYear:Number,
    mpaRating:String,
    cast:[String],
    nowShowing:Boolean
})

module.exports = mongoose.model('Movie', movieSchema);
