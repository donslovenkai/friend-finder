//Load data from friend array
var friendArray = require('../data/friend.js');

//Routes
module.exports = function(app){
  //GET route /api/friends to display JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendArray);
  });

  //POST route /api/friend to handle incoming survey results and perform compatibility logic
  app.post('/api/friends', function(req,res){
    //Define variables to get new friend scores to compare with friends in friendArray
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //Loop through all current friends in the array
    for(var i=0; i<friendArray.length; i++){
      var totalDiff = 0;
      //Loop through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        totalDiff += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //Push results into scoresArray
      scoresArray.push(totalDiff);
    }

    //Find best match after comparing all friends
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //Return bestMatch data
    var bff = friendArray[bestMatch];
    res.json(bff);

    //Push new submission into friendArray
    friendArray.push(req.body);
  });
};
