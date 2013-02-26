var create = require('./create'),
	list = require('./list'),
	read = require('./read'),
	update = require('./update'),
	_delete = require('./delete'),
	authUser = require('../../../auth/user'),
	sameUser = require('../../../auth/same')('uid');

module.exports = function(app) {
	app
		.get('/users', list)
		.post('/users', create)
		.get('/users/:uid', read)
		.put('/users/:uid', validUser, sameUser, update)
		.del('/users/:uid', validUser, sameUser, _delete);
};