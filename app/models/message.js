var Backbone = require('backbone');

var Message = Backbone.Model.extend({
	defaults: {
    	title: 'default',
    	message: "Hello, World!"
  }
});

var Messages = Backbone.Collection.extend({
	model: Message
});


var exports = {Message, Messages};

module.exports = exports;