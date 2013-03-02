module.exports = function(resource){

  var Model = require('../../data/models/' + resource);

  return function load(req, res, next){

    var resource_id = req.attr(resource + '_id');

    Model.findById(resource_id, function(err, result){
      
      if (err) {

        res.send(400, err);

      } else {

        if (result) {

          req[resource] = result;
          next();

        } else {

          res.send(404, 'Not Found')
        }

      }
    });
  }
}