
console.log('keys: this is loaded');
console.log(process.env.SPOTIFY_ID +  " + id +" + process.env.SPOTIFY_SECRET);
// initializing spotify with id and secret code
exports.spotify = {
  
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  redirect: process.env.SPOTIFY_REDIRECT
  
};
console.log(process.env.SPOTIFY_ID +  " + id +" + process.env.SPOTIFY_SECRET);