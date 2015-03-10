var React = require('react');
var BackboneMixin = require('backbone-react-component');


var Dashboard = React.createClass({
  mixins: [BackboneMixin],
  render: function() {
    return (
      <p>Dashboard</p>
    );
  }
});

module.exports = Dashboard;