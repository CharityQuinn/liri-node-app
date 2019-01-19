require("./.env").config();
console.log('this is loaded');

var axios = require("axios");
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var axios = require("axios");




var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Load the fs package to read and write
var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "concert-this", "spotify-this-song", etc.)
// The second will be the amount that will be added, spotify-this-songn, etc.
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "concert-this":
    concertThis();
    break;

  case "spotify-this-song":
    spotifyThisSong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}






// each command should be like this
//node liri.js concert-this <artist/I Want it That Way;

function concertThis() {
  var bandsInTnKey = "7e9d74149cb19a07ef1d023000b73376"
}

function spotifyThisSong() {
  // if no song play "The Sign" by Ace of Base
  fs.readFile("random.txt", "track", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var output = data.split(",");


  });

}
//`node liri.js movie-this '<movie name here>'`
// that gives you:  * Title of the movie.
//  * Year the movie came out.
//  * IMDB Rating of the movie.
//  * Rotten Tomatoes Rating of the movie.
//  * Country where the movie was produced.
//  * Language of the movie.
//  * Plot of the movie.
//  * Actors in the movie.

// default move is Mr. Nobody
function movieThis() {
  var omdbKey = "8c2420ae"
  var omdbApi = " http://www.omdbapi.com/?i=tt3896198&apikey=8c2420ae"

  // Then run a request with axios to the OMDB API with the movie specified
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );
}

function doWhatItSays() {

}