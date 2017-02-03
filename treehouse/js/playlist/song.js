function Song(title, artist, length) {
    Media.call(this, title, length);
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.play = function() {
    this.isPlaying = true;
};

Song.prototype.stop = function() {
    this.isPlaying = false;
};

Song.prototype.toHTML = function() {
    var html = "<li";
    if (this.isPlaying){
        html += " class='current'";
    }
    html += ">";
    html += this.title;
    html += " - ";
    html += this.artist;
    html += "<span class='duration'>";
    html += this.length;
    html += "</span></li>";

    return html;
};