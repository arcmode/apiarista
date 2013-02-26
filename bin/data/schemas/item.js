var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	User = require('../models/user');

var ItemSchema = new Schema({

	user: { type: ObjectId, ref: 'User', required: true },

	name: { type: String, required: true},
	description: { type: String, required: true},

	type: {
	    type: String,
	    required: true,
	    lowercase: true,
	    'enum': ['need', 'offer']},

	date: { type: Date, default: Date.now() }
});

module.exports = ItemSchema;