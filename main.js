PTK = {}

PTK.MAIN = function(keywords){
  keywords = keywords || {}
  banner = keywords.banner || 'img/banner.txt';

  // Load the text ASCII art banner
  ascii_artist = this.load('img/banner.txt');
  ascii_artist.then(this.log)
}
PTK.MAIN.prototype = {
  // Load a file from server
  load: function(where) {
    // Promise to get an Aysnc Request
    return new Promise(function(done){
      var bid = new XMLHttpRequest();
      var win = function(){
        if (bid.status == 200) {
          return done(bid.response);
        }
        return done(where);
      };
      // Whether error or load, win
      bid.open('GET', where, true);
      bid.onerror = bid.onload = win;
      bid.send();
    });
  },
  log: function(string) {
    console.log(string)
  }
}

window.onload = function(){
  // Load the ACII art banner
  main = new PTK.MAIN();
}
