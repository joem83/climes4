//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    dateCreated: { type: Date }
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('carts', CartSchema );
