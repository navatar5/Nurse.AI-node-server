const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    username: {type: String, required: false, max: 100},
    date: {type: Date, required: false},
    gluc_level: {type: Number, required: false},
    meal: {type: String, required: false},
    exercise: {type: Number, required: false}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
