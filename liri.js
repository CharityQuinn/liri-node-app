require("dotenv").config();
console.log('dotenv: this is loaded');

// getting axios going/linked
var axios = require("axios");
// link to keys.js and assing a variable to it
var keys = require("./keys.js");

// load spotify and assign it to a variable
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  
});
console.log("id  equals " + id + "secret equals " + secret);
spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data); 
});

console.log("This is value of Spotify " + Spotify);
// var spotify = new Spotify(keys.spotify);
// console.log("this is the lower case spotify " + spotify);


// Load the fs package to read and write
var fs = require("fs");

// Take in the argument from the user
// The first will be the action (i.e. "concert-this", "spotify-this-song", etc.)
// The second will be the track/movie/concert/thing to do that will be added, spotify-this-song, etc.
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

function concertThis(value) {
  var bandsInTnKey = "7e9d74149cb19a07ef1d023000b73376"
}

function spotifyThisSong(value) {
  // if no song play "The Sign" by Ace of Base
  fs.readFile("random.txt", "track", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var output = data.split(",");
    if (value === undefined) {
      value = "I Want it That Way"
    }

    var client_id = '6e00397819554dfe8ccad8e00e774755'; // Your client id
    var client_secret = 'CLIENT_SECRET'; // Your secret
    var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
    // GET https://accounts.spotify.com/authorize?client_id=client_id&response_type=code&redirect_uri=https:/&scope=user-read-private%20user-read-email&state=34fFs29kd09"

    const play = ({
      spotify_uri,
      playerInstance: {
        _options: {
          getOAuthToken,
          id
        }
      }
    }) => {
      getOAuthToken(access_token => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            uris: [spotify_uri]
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
          },
        });
      });
    };

    play({
      playerInstance: new Spotify.Player({
        name: "value"
      }),
      spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
    });

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
function movieThis(value) {
  var omdbKey = "8c2420ae"
  var omdbApi = " http://www.omdbapi.com/?i=tt3896198&apikey=8c2420ae"

  // Then run a request with axios to the OMDB API with the movie specified
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );
}

function doWhatItSays(value) {

}