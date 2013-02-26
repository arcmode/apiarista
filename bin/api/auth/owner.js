
/*
 * Ownership verification.
 */

var User = require('../../data/models/user');
var Item = require('../../data/models/item');

module.exports = function(req, res, next) {

	Item
		.findById(req.params.oid)
		.exec(function(err, item){
			if (err) {
				return next(err);
			} else {
				if (item) {

					if (String(item.user) === req.query.uid) {
						req.item = item;
						next();
					} else {
						res.send(401, "Unauthorized, the given User doesn't owns the requested Item.");
					}
				} else {
					res.send(404, 'Not Found');
				}
			}
		});
}