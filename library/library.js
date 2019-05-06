var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

var printOnePlaylist = function(arr) {
  return arr[0] + ": " + arr[1] + " - " + arr[2].length + " tracks\n";
};

// FUNCTIONS TO IMPLEMENT:
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var objPlaylists = library.playlists;
var printPlaylists = function() {
  let newArr = [];
  for (var key in objPlaylists) {
    var newObjPlaylists = objPlaylists[key];
    var arr = Object.values(newObjPlaylists);
    newArr.push(printOnePlaylist(arr));
  }
  return newArr.join().replace(/,/g, "");
}; console.log(printPlaylists());

console.log("------------------------------");

var printOneTrack = function(arr) {
  return arr[0] + ": " + arr[1] +" by " + arr[2] + " " + arr[3] + "\n";  
};

console.log("------------------------------");

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var objTrack = library.tracks;
var printTracks = function() {
  var newArr = [];
  for (var key in objTrack) {
    var newObjTrack = objTrack[key];
    var arrTrackValue = Object.values(newObjTrack);
    newArr.push(printOneTrack(arrTrackValue));
  }
  return newArr.join().replace(/,/g, "");
}; console.log(printTracks());

console.log("------------------------------");

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  let newArr = [];
  var arr = Object.values(playlistId);
  newArr.push(printOnePlaylist(arr));
  //console.log(typeof arr[2]);
  arr[2].forEach(element => {
    var objTrack = library.tracks;
    for (const key in objTrack) {
      if (key === element) {
        var newObjTrack = objTrack[key];
        var arrTrackValue = Object.values(newObjTrack);
        newArr.push(printOneTrack(arrTrackValue));
      }
    }
  });
  return newArr.join().replace(/,/g, "");
}; console.log(printPlaylist(library.playlists.p01));

console.log("------------------------------");

// adds an existing track to an existing playlist
var addTrackToPlaylist = function(trackId, playlistId) {
  playlistId.tracks.push(trackId.id);
  playlistId.tracks.sort();
  return playlistId;
}; console.log(addTrackToPlaylist(library.tracks.t01, library.playlists.p02));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}; console.log(uid());

console.log("------------------------------");

// adds a track to the library

var addTrack = function(name, artist, album) {
  var id = uid();
  var newTrack = {
    id: id,
    title: name,
    artist: artist,
    album: album
  };

  return library.tracks[id] = newTrack;
  
};console.log(addTrack("M.Patate", "Pomme de terre", "les meilleurs chips"));

console.log("------------------------------");

// adds a playlist to the library

var addPlaylist = function(name) {
  pNextLength = Object.keys(library.playlists).length + 1;
  pNext = pNextLength < 10 ? "p0"+pNextLength : "p"+pNextLength;
  var nextObj = {
    id: pNext,
    name: name,
    track:[]
  };
return library.playlists[pNext] = nextObj;
};
console.log(addPlaylist("les chips"));
console.log("------------------------------");

console.log(library.playlists);
console.log("------------------------------");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};
