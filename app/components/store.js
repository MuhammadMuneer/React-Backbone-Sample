var Message = require('../models/message.js').Message;
var Messages = require('../models/message.js').Messages;

var message = new Messages();

message.add(new Message({title: 'sup', message: 'yo whats up'}));
message.add(new Message({}));

module.exports = message