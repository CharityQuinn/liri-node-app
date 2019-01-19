require(".env").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// you should be able to take in these commands:
//  `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says

// each command should be like this
//node liri.js concert-this <artist/I Want it That Way;

fs.readFile("random.txt", "text", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var output = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {
    // Print each element (item) of the array/
    console.log(output[i]);
  }
});


// var googleBooksAPI = "AIzaSyCheolDq79sZudYdTX1G6FspSWLpQXDEiI";
//     var googleBooksURL = "https://www.googleapis.com/books/v1/volumes?q=" + pastBooks[0].title + pastBooks[0].author + "&key=" + googleBooksAPI;

function({type: 'track', query: 'I Want it That Way', limit: 20}, callback);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 6e00397819554dfe8ccad8e00e774755,
  secret: ef55a913c08d4feea07d388416fde3ae
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
var spotUrl = "spotify:track:6rqhFgbbKwnb9MLmUQDhG6"

//</your></your>spotifiy id = 

//spotify secret = ef55a913c08d4feea07d388416fde3ae

`node liri.js movie-this '<movie name here>'`

// that gives you:  * Title of the movie.
      //  * Year the movie came out.
      //  * IMDB Rating of the movie.
      //  * Rotten Tomatoes Rating of the movie.
      //  * Country where the movie was produced.
      //  * Language of the movie.
      //  * Plot of the movie.
      //  * Actors in the movie.

      // default move is Mr. Nobody
// if no song play "The Sign" by Ace of Base
