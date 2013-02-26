var create = require('./create'),
	_delete = require('./delete'),
	sameConsumer = require('../../../auth/same')('cid');

module.exports = function(app) {
	app
		.post('/consumers', create)
		.del('/consumers/:cid', sameConsumer, _delete);
};