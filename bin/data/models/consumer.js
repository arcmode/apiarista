var mongoose = require('mongoose');
var ConsumerSchema = require('../schemas/consumer');

var Consumer = mongoose.model('Consumer', ConsumerSchema);

module.exports = Consumer;