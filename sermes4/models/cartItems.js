//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var cartItemsSchema = new Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    quantity: { type: Number, default: 1 },
    itemid: { type: mongoose.Schema.Types.ObjectId, ref: 'item'},
    total: { type: Number },
    cartid: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' }
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('cart_item', cartItemsSchema );
