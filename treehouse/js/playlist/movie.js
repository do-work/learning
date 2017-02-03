function Movie(title, year , length) {
    Media.call(this, title, length);
    this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.play = function() {
    this.isPlaying = true;
};

Movie.prototype.stop = function() {
    this.isPlaying = false;
};

Movie.prototype.toHTML = function() {
    var html = "<li";
    if (this.isPlaying){
        html += " class='current'";
    }
    html += ">";
    html += this.title;
    html += " (";
    html += this.year;
    html += ") ";
    html += "<span class='duration'>";
    html += this.length;
    html += "</span></li>";

    return html;
};