module.exports = function(resource) {

  return function same(req, res, next) {

    if (req.params[resource + '_id'] === req.query[resource + '_id']) {

      next();
      
    } else {
      res.send(309, 'Conflict. Not the same ' + resource + '.');
    }
  }
}