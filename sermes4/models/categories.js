
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;


var CategoriesSchema = new Schema({
    name: { type: String }
});


//Export function to create "SomeModel" model class
module.exports = mongoose.model('categories', CategoriesSchema);
