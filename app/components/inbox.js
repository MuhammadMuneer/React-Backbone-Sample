var React = require('react');
var Store = require('./store.js');
var BackboneReactMixin = require('backbone-react-component');

var Inbox = React.createClass({
  mixins: [BackboneReactMixin],
  overrideCollection: function () {
      return Store;
  },
  renderMessages: function() {
    return this.props.collection.map( function(message, index) {
      return (
        <li key={index}>
          <p>{message.get('title')}</p>
          <p>{message.get('message')}</p>
        </li>
      );
    });
  },
  render: function() {
    return (
      <div>
      	<p>Inbox</p>
      	<ul>{ this.renderMessages() }</ul>
      </div>
    );
  }
});

module.exports = Inbox;