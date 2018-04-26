const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {type: String, required: true },
    deliciousness_rating: {type: Number, required: true},
    is_hot: {type: String, required: true}
});

//mongoose, please use 'book'
//mongoose says, I automatically pluralize, your now using books
module.exports = mongoose.model('food', foodSchema);