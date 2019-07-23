const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const BG = document.querySelector("#BG");
const pp = document.querySelector("#pp");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");
var playing = true;
var songs = ["icon.mp3", "bad guy.mp3", "lp.mp3", "on my own.mp3"],
  songIndex = 0;
(thumbnails = ["icon.jpg", "be.jpg", "lp.jpeg", "tb2.jpg"]),
  (songNames = [
    "Jaden Smith - Icon",
    "Billie Eilish - Bad Guy",
    "Linkin Park - In The End",
    "Ross Lynch - On My Own"
  ]);

function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      pp = document.querySelector("#pp"),
      thumbnail = document.querySelector("#thumbnail");
    pp.src = "Pause.png";
    song.play(); //plays the song
    playing = false;
    thumbnail.style.transform = "scale(1.2)";
  } else {
    pp.src = "Play.png";
    song.pause(); //pauses the song
    playing = true;

    thumbnail.style.transform = "scale(1)";
  }
}

function nextSong() {
  songIndex++;
  if (songIndex > 3) songIndex = 0;
  document.querySelector("#song").src = songs[songIndex];
  document.querySelector("#thumbnail").src = thumbnails[songIndex];
  document.querySelector("#BG").src = thumbnails[songIndex];
  playPause();
  document.querySelector(".song-title").innerHTML = songNames[songIndex];
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) songIndex = 3;
  document.querySelector("#song").src = songs[songIndex];
  document.querySelector("#thumbnail").src = thumbnails[songIndex];
  document.querySelector("#BG").src = thumbnails[songIndex];
  playPause();
  document.querySelector(".song-title").innerHTML = songNames[songIndex];
}

function updateProgressValue() {
  const progressBar = document.querySelector("#progressBar");
  progressBar.max = document.querySelector("#song").duration;
  progressBar.value = document.querySelector("#song").currentTime;
}

setInterval(updateProgressValue, 700);
