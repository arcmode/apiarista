module.exports = function(resource) {

	return function send(req, res, next) {
		
		res.json(req[resource]);
	}

};