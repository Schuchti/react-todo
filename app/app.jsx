var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation-sites
$(document).foundation();

// Application css styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React Boilerplate 3 Project</p>,
  document.getElementById('app')
);
