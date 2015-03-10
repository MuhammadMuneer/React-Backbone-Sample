var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./app.js')}>
    <Route name="inbox" handler={require('./inbox.js')}/>
    <Route name="calendar" handler={require('./calendar.js')}/>
    <DefaultRoute handler={require('./dashboard.js')}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});