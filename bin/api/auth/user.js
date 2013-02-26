
/*
 * Validation of User Credentials
 */

var User = require('../../data/models/user');

module.exports = function(req, res, next){

	var uid = req.query.uid,
		token = req.query.tok;

    if (uid && token) {
    	User 
		    .findById(uid)
			.exec(function(err, user) {
				if (err) {
	                return next(err);
	            } else {
	                if (user) {
	                	if (user.token === token) {
	                		req.user = user;
	                		next()
	                	} else {
	                		res.send(401, 'Unauthorized, wrong credentials.');
	                	}
	                } else {
	                	res.send(401, 'Not Found, User doesn\'t exists.');
	                }
	            }
			});
	} else {
	   	res.send(400, 'You must provide both Id and Token.');
	}
};