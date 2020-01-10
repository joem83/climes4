
//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    name: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    price: { type: Number },
    imagepath: { type: String }
});


//Export function to create "SomeModel" model class
module.exports = mongoose.model('item', ItemsSchema);
