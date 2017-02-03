function Media(title, length) {
    this.title = title;
    this.length = length;
    this.isPlaying = false;
}

Media.prototype.play = function() {
    this.isPlaying = true;
};

Media.prototype.stop = function() {
    this.isPlaying = false;
};