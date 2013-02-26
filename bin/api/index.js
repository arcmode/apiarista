
var itemCrud = require('./resources/item/crud'),
	consumerCrud = require('./resources/consumer/crud');

module.exports = function (app) {

	app.configure(function(){
	 	app.use('/', require('./auth/consumer'));
	})

	itemCrud(app);
	consumerCrud(app);
};