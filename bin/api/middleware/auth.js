module.exports = function(resource) {

  return function auth(req, res, next) {

    var query = req.query[resource + '_secret'],
        secret = req[resource] && req[resource].secret;

    if ( secret === query ) {

      next();

    } else {

      res.send(401, 'Unauthorized');
    }
  };
};