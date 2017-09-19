//Dependencies
var path = require('path');

//Routes

module.exports = function(app){
  //GET route to display survey page 
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../app/public/survey.html'));
  });

  //Default route to home page 
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../app/public/home.html'));
  });
};