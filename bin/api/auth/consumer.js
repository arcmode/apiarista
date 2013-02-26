
/*
 * Validation of Consumer Credentials
 */

var Consumer = require('../../data/models/consumer');

module.exports = function(req, res, next){

	var cid = req.query.cid,
		secret = req.query.sec;

    if (cid && secret) {
    	Consumer 
    	    .findOne({ _id: cid, secret: secret })
    		.exec(function(err, consumer) {
    			if (err) {
                    return next(err);
                } else {
                    if (consumer) {
                        req.consumer = consumer;
                    	next();
                    } else {
                    	res.send(404, 'Not Found, Consumer doesn\'t exists or wrong credentials');
                    }
                }
    		});
    } else {
    	res.send(400, 'You must provide Consumer cid and Secret');
    }
};