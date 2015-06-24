window.onload = init;

var init = function() {
  // cache variables
  var video = document.getElementsByClassName('demo2'),
      play  = document.getElementsByClassName('demo2__controls--play'),
      mute  = document.getElementsByClassName('demo2__controls--mute');


  // listen for playback
  play.addEventListener("click", function(e) {
    e.preventDefault();
    if (video.paused) {
      video.play();
      play.innerHTML = "Pause";
    } else {
      video.pause();
      play.innerHTML = "Play";
    }
  });

  // listen for mute/unmute
  mute.addEventListener("click", function(e) {
    e.preventDefault();
    if(video.muted) {
      video.muted = false;
      mute.innerHTML = "Mute";
    } else {
      video.muted = true;
      mute.innerHTML = "Unmute";
    }
  });
}
