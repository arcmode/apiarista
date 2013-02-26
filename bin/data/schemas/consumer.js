var token = require('token.js');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	User = require('../models/user');

var ConsumerSchema = new Schema({

	user: { type: ObjectId, ref: 'User', required: true },

	secret: { 
		type: String,
		default: token(32),
		unique: true,
		required: true },

	date: { type: Date, default: Date.now() }
});

module.exports = ConsumerSchema;