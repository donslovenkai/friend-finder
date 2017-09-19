//Load data from friend array
 var friendArray = require('../data/friend.js');
 
//Routes

module.exports = function(app){
  //GET route to /api/friend to display JSON of all possible friends
  app.get('/api/friend', function(req,res){
    res.json(friendArray);
  });

 //POST route /api/friend to handle incoming survey results and perform compatibility logic
 app.post('/api/friend', function(req,res){

//Compare user with their best friend match

//Object to hold the best match friend
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

    //Variables to take the result of the user's survey POST and parse
		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		//Loop through all the friend possibilities in the database
		for  (var i=0; i< friend.length; i++) {

			console.log(friend[i].name);
			totalDifference = 0;

			// Loop through the scores of each friend
			for (var j=0; j< friend[i].scores[j]; j++){

				//Calculate the difference between the scores and add to totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friend[i].scores[j]));

				//If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

					//Reset bestMatch to be the new friend.
					bestMatch.name = friend[i].name;
					bestMatch.photo = friend[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		//Save the user's data to database
		friend.push(userData);

		//Return a JSON with the user's bestMatch
		res.json(bestMatch);

	});

}	