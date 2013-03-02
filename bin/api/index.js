
module.exports = function (app) {

  app.all('*', require('./middleware/attr'));

  app.namespace('/api', function(){
    
    //CRUDs PLACEHOLDER
  });
};