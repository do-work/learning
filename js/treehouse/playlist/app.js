var playlist = new Playlist();

var cute = new Song("CUTE", "Taking Back Sunday", "3:00");
var six = new Song("Six", "All That Remains", "3:00");

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(cute);
playlist.add(six);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playBtn = document.getElementById("play");
playBtn.onclick = function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
};

var nextBtn = document.getElementById("next");
nextBtn.onclick = function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
};

var stopBtn = document.getElementById("stop");
stopBtn.onclick = function(){
    playlist.stop();
    playlist.renderInElement(playlistElement);
};