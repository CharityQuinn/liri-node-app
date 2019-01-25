require("dotenv").config();
console.log('dotenv: this is loaded');
const moment = require("moment");
// load spotify and assign it to a variable
var Spotify = require("node-spotify-api");


// getting axios going/linked
var axios = require("axios");
// link to keys.js and assing a variable to it
var keys = require("./keys.js");


// Load the fs package to read and write
var fs = require("fs");

// Take in the argument from the user
// The first will be the action (i.e. "concert-this", "spotify-this-song", etc.)
// The second will be the track/movie/concert/thing to do that will be added, spotify-this-song, etc.
var action = process.argv[2];
var value = process.argv[3];



var spotify = new Spotify(keys.spotify);


// Creation of the log.txt file in order to log my code results
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})



// The switch-case will direct which function gets run.

switch (action) {
  case "concert-this":
    concertThis(value);
    break;

  case "spotify-this-song":
    spotifyThisSong(value);
    break;

  case "movie-this":
    movieThis(value);
    break;

  case "do-what-it-says":
    doWhatItSays(value);
    break;
}



// each command should be like this
//node liri.js concert-this <artist/I Want it That Way;
// This function will contact BandsInTown to get a concert played called by user
function concertThis() {
  value = process.argv[3];
  if (value === undefined || value === "") {
    value = "I Want it That Way"
  }
  console.log(value);
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=" + process.env.bandsInTnKey)
    .then(function (response) {
      for (i = 0; i < 11; i++) {

        console.log("--------------------------")
        console.log("The list is all bands")
        console.log(response.data[i].venue.city)
        console.log(response.data[i].datetime)
        time = response.data[i].datetime;
        var eventDate = moment(time).format('MMMM Do YYYY')
        console.log("This is the date: " + eventDate)
        console.log("--------------------------");
        logger.write("Concert-this has a venue named " + response.data[i].venue.name + " \n");
        logger.write("The location of the venue is " + response.data[i].venue.city + " \n");
        logger.write("The date at the venue is " + eventDate + " \n");

      }
    })
    .catch(function (error) {
      console.log("Axios Error: ", error);
    })
}



// This function will contact Spotify in order to play a song ----------------------------------------------------------------------------
function spotifyThisSong() {
  action = process.argv[2];
  value = process.argv[3];

  if (value === undefined || value === "") {
    value = "Ace of Base"
  }
  console.log("Spotify's value sent is " + value);

  spotify
    .search({
      type: 'track',
      query: value,
      limit: 1
    })
    .then(function (response) {

      let song = response.tracks.items[0]
      console.log("artist(s): ", song.album.artists[0].name);

      console.log("song name: ", song.name);
      console.log("The link for the Album is " + song.preview_url);
      console.log("album: ", song.album.name);
      logger.write("Spotify This retrieved " + song.name + " \n");
      logger.write(" " + song.album.name + " \n ");
      logger.write(" " + song.preview_url + " \n ");
      console.log("===================================================================");


    })
    .catch(function (err) {
      console.log(err)
    })

}




//`node liri.js movie-this "movie name here-------------------------------"`
// default move is Mr. Nobody
function movieThis(value) {
  console.log("This is value " + value);
  var omdbKey = "8c2420ae"
  if (value === undefined || value === "") {
    value = "Mr. Nobody"
  }
  // Then run a request with axios to the OMDB API with the movie specified
  axios.get("http://www.omdbapi.com/?t=" + value + "&plot=full&apikey=8c2420ae").then(
    function (response) {
      console.log("Title: " + response.data.Title);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("The movie's rating is: " + response.data.Rated);
      console.log("The movie came out in this year: " + response.data.Year);
      console.log("The actors in the movie are " + response.data.Actors);
      console.log("The language in the film is " + response.data.Language);
      console.log("The movie is from " + response.data.Country);
      console.log("Plot: " + response.data.Plot);

      console.log("About to loop through to get Rotton Tomatoes");
      for (i = 0; i < response.data.Ratings.length; i++) {
        var tomatoes = response.data.Ratings[i].Value
        console.log("\nThis might be Rotten Tomatoes " + tomatoes);
        logger.write("\nMovie This retrieved " + response.data.Title + " \n") // append string to your file
        logger.write("The actors are " + response.data.Actors + " \n") // again
        logger.write("The year it was made " + response.data.Year + " \n"); // again )
        logger.write("Rotton Tomatoes is " + tomatoes + " \n"); // again )
      }
    })
}




function doWhatItSays() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    console.log("This is data from random.txt " + data);
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    };

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    
    for (i = 0; i < dataArr.length; i += 2){
      var fxn = dataArr[i];
      var actName = dataArr[i++];
      (fxn === "spotify-this-song") ? spotifyThisSong(actName) : (fxn === "movie-this") ? movieThis(actName) : (fxn === "concert-this") ? (concertThis(actName)) : (console.log("Error, no more data"))
      logger.write("doWhatItSays retrieved " + fxn + ", " + actName +" \n");
     }


    
  });
 
}