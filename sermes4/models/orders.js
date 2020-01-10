//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    cartid: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' },
    totalPrice: { type: Number },
    address: { type: Array },
    date4delivery: { type: Date },
    dateOForder: { type: Date },
    last4digits: { type: Number }
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('order', ordersSchema );
