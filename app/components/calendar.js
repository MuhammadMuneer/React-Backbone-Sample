var React = require('react');
var BackboneMixin = require('backbone-react-component');

var Calendar = React.createClass({
  mixins: [BackboneMixin],
  render: function() {
    return (
      <p>Calendar</p>
    );
  }
});

module.exports = Calendar;