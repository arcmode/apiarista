var create = require('./create'),
	list = require('./list'),
	read = require('./read'),
	update = require('./update'),
	_delete = require('./delete'),
	authUser = require('../../../auth/user'),
	authOwner = require('../../../auth/owner');

module.exports = function(app) {
	app
		.get('/items', list)
		.post('/items', create)
		.get('/items/:iid', read)
		.put('/items/:iid', authUser, authOwner, update)
		.del('/items/:iid', authUser, authOwner, _delete);
};