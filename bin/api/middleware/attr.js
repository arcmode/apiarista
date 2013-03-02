module.exports = function (req, res, next){

  req.__proto__.attr = function(key) {

    return req.params[key] || req.query[key] || req.body[key];
  };

  next();
}