const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:{type:String},
    rating:{type:Number}
}, {
    timestamps:true
})
const movieSchema = new Schema({
    title:String,
    releaseYear:Number,
    mpaaRating:String,
    cast:[String],
    nowShowing:Boolean,
    reviews:[reviewSchema]
}, {
    timestamps:true
})

module.exports = mongoose.model('Movie', movieSchema);
