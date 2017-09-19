//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//External files to handle routing
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Start the server, begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});