var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}
var p02Exemple =   { id: "t01",
name: "Code Monkey",
artist: "Jonathan Coulton",
album: "Thing a Week Three" }

function arrKey (input){
       return Object.keys(input);
}
function arrValues (input){
       return Object.values(input);
}
// p01: Coding Music - 2 tracks
function valueKey(input){
       for (var qqchose in input ){
              var numqqchose = input[qqchose];
              console.log(numqqchose);
       }    
       return numqqchose;
}
function track(input){
       return input ;
}

function trackvalue(inputTrack, key){
       return inputTrack[key] ;
}

/* function acces2(track){
       var groupeChanson = library.track;
       var arrListplay = Object.keys(groupeChanson); //[ 'p01', 'p02' ]
       var elPnbr = arrListplay[0]; // p01
} */

console.log(track(library));


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () { 
 

/* {     
       p01: { id: 'p01', name: 'Coding Music', tracks: [ 't01', 't02' ] },
       p02: { id: 'p02', name: 'Other Playlist', tracks: [ 't03' ] } 
   } */
var groupeChanson = library["playlists"];

var arrListplay = Object.keys(groupeChanson); //[ 'p01', 'p02' ]
var elPnbr = arrListplay[0]; // p01
var nomPlay = library.playlists["p01"].name; //Coding Music
var nomtracks = library.playlists["p01"].tracks; // [ 't01', 't02' ]
var tracksLength = nomtracks.length; // 2
/* for (var pqqchose in elPnbr){
       var numelPnbr = elPnbr[pqqchose];
       console.log("  qqchose : "+ pqqchose + "  numelPnbr : "+ numelPnbr );
} */
//console.log(tracksLength);
  console.log(elPnbr + " ; " + nomPlay + " - " + tracksLength + " tracks");


}

//printPlaylists();










/* // prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
 */
