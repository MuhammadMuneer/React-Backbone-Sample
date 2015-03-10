// import {Model, Collection} from 'backbone';

// class Person extends Model {
//   defaults() {
//     return {
//       id: -1,
//       name: '',
//       description: 'Your average Joe'
//     }
//   }
// }

// class Persons extends Collection {
//   model: Person
// }

// exports = {Person, Persons};

// export default exports;

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