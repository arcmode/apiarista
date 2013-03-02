
/*
 * Ownership verification.
 */

module.exports = function(resource, owner){

	return function ownership(req, res, next) {

		if (req[resource].owner._id === req[owner]._id) {

			next();

		} else {

			res.send(401, 'Unauthorized');
		}
	}
}