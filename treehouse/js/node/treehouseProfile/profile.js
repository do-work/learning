// Problem: simple way to look at users badge count and JS points
// Solution: use node to connect to treehouse API to get profile information to print out
var https = require("https");
var http = require("http");

function printMessage(username, badges, points) {
    var message = username + " has " + badges + " total badges and " + points + " total points in Javascript!";
    console.log(message);
}

function printError(e){
    console.error(e.message);
}

function get(username){
    var request = https.get("https://teamtreehouse.com/" + username + ".json",
        function(response){
            var body = "";

            response.on('data', function(chunk){
                body += chunk;
            });

            response.on('end', function(){
                if(response.statusCode === 200){
                    try {
                        var profile = JSON.parse(body);
                        printMessage(username, profile.badges.length, profile.points.JavaScript);

                    } catch(e) {
                        printError(e);
                    };
                } else {
                    printError({message: "There was an error getting the profile for "+ username + ". (" +
                    http.STATUS_CODES[response.statusCode]+ ")"});
                };
            });
        });
}

module.exports.get = get;