var token = require('token.js');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({

	username: String,
	name: { first: String, last: String },
	email: { type: String, unique: true },

	token: { 
		type: String,
		default: token(32),
		unique: true,
		required: true },

	date: { type: Date, default: Date.now() }
});


module.exports = UserSchema;