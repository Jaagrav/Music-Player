const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const BG = document.querySelector("#BG");
const pp = document.querySelector("#pp");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");
var playing = true;
var songs = ["Jaden Smith - Icon.mp3", "Billie Eilish - bad guy (Lyrics).mp3", "Tommee Profitt - In The End (Mellen Gi Remix).mp3", "Ross Lynch - On My Own (From Teen Beach 2).mp3","y2mate.com - lord_huron_the_night_we_met_lyric_video_wGF7PswOENQ.mp3","y2mate.com - idina_menzel_evan_rachel_wood_show_yourself_from_frozen_2lyric_video_md7dK5-qvHc.mp3","y2mate.com - jar_of_hearts_christina_perri_lyrics_rOYnrBuIMgA.mp3","y2mate.com - christina_perri_the_lonely_lyrics_a9YQPWqTnx4.mp3"],
  songIndex = 0;
(thumbnails = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSCaJfLX-LEPmCHcz5fvkcZUrO2_5Z4LeaGe-HiuIYh829Q6YQ", "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo1RQ_vSELHhtffeMwTehFeUa9d7N_lwHeoZeovIN77uF9p67e", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTob-tfpJQI1_J2pTsGaRh0tQT3oOUBsSdCrGbh790J1Was-koe","https://m.media-amazon.com/images/I/915Rma--XpL._SS500_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQykc1WORFyzaAuvEcqWc6EsCaroo-i_QcmZFML0o4gteurxuQP","https://upload.wikimedia.org/wikipedia/en/f/f9/Jarofhearts.jpg","https://m.media-amazon.com/images/I/71a0frsfbTL._SS500_.jpg"]),
  (songNames = [
    "Jaden Smith - Icon",
    "Bad Guy - Billie Eilish",
    "In The End - Linkin Park",
    "On My Own - Ross Lynch",
    "Night We Met - Lord Huron",
    "Show Yourself - Idina Menzel",
    "Jar Of Hearts \nChristina Perri"
    "The Lonely \nChristina Perri"
  ]);

function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      pp = document.querySelector("#pp"),
      thumbnail = document.querySelector("#thumbnail");
    pp.src = "https://icons-for-free.com/iconfiles/png/512/music+pause+play+stop+icon-1320185671881968262.png";
    song.play(); //plays the song
    playing = false;
    thumbnail.style.width = "160%";
  } else {
    pp.src = "http://www.iconarchive.com/download/i91182/icons8/windows-8/Media-Controls-Play.ico";
    song.pause(); //pauses the song
    playing = true;
    thumbnail.style.width = "130%";
  }
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length-1) songIndex = 0;
  document.querySelector("#song").src = songs[songIndex];
  document.querySelector("#thumbnail").src = thumbnails[songIndex];
  document.querySelector("#BG").src = thumbnails[songIndex];
  playPause();
  document.querySelector(".song-title").innerHTML = songNames[songIndex];
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length-1;
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
