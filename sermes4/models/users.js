//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UsersSchema = new Schema({
    fn: { type: String },
    ln: { type: String },
    email: { type: String },
    password:  { type: String },
    address: { type: String },
    role: { type: String}
});

UsersSchema.plugin(passportLocalMongoose);

//Export function to create "SomeModel" model class
module.exports = mongoose.model('users', UsersSchema );
