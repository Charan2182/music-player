let songs = [

  {
    title: "Samajavaragamana",
    src: "../[iSongs.info] 01 - Samajavaragamana.mp3",
    cover: "../puramloo.jpg"
  },

  {
    title: "Butta Bomma",
    src: "../[iSongs.info] 03 - Buttabomma.mp3",
    cover: "../puramloo.jpg"
  },
  {
    title: "Ninne Ninne",
    src: "../[iSongs.info] 06 - Ninne Ninne.mp3",
    cover: "../music.jpg"
  },
  {
    title: "Singles Anthem",
    src: "../[iSongs.info] 08 - Singles Anthem.mp3",
    cover: "../music.jpg"
  },
  {
    title: "Chinnadana Neekosam",
    src: "../[iSongs.info] 18 - Chinnadhana.mp3",
    cover: "../chinna.jpg"
  },
  {
    title: "Inkem Inkem Inkem Kaavaale",
    src: "../[iSongs.info] 12 - Inkem Inkem Inkem Kaavaale.mp3",
    cover: "../govindam.jpg"
  },
  {
    title:"Jatha Kalise",
    src: "../[iSongs.info] 16 - Jatha Kalise.mp3",
    cover: "../matnthudu.jpg"
  },
  {
    title:"Crazy Feeling",
    src: "../[iSongs.info] 15 - Crazy Feeling.mp3",
    cover: "../music.jpg"
  }
];

let currentSong = 0;

let audio = document.getElementById("audio");

let title = document.getElementById("title");

let cover = document.getElementById("cover");


// LOAD SONG
function loadSong() {

  audio.src = songs[currentSong].src;
  audio.load();

  title.innerText = songs[currentSong].title;

  cover.src = songs[currentSong].cover;
}


// PLAY / PAUSE
function playPause() {

  if (audio.paused) {
    audio.play();

  } else {

    audio.pause();
  }
}


// NEXT SONG
function nextSong() {

  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong();

  audio.play();
}


// PREVIOUS SONG
function prevSong() {

  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong();

  audio.play();
}

// UPDATE PROGRESS BAR
audio.addEventListener(
  "timeupdate",
  updateProgress
);

function updateProgress() {

  let percent =
  (audio.currentTime / audio.duration)
  * 100;

  progress.style.width =
  percent + "%";


  // CURRENT TIME
  let currentMinutes =
  Math.floor(audio.currentTime / 60);

  let currentSeconds =
  Math.floor(audio.currentTime % 60);

  if (currentSeconds < 10) {

    currentSeconds =
    "0" + currentSeconds;
  }

  currentTime.innerText =
  `${currentMinutes}:${currentSeconds}`;


  // DURATION
  let durationMinutes =
  Math.floor(audio.duration / 60);

  let durationSeconds =
  Math.floor(audio.duration % 60);

  if (durationSeconds < 10) {

    durationSeconds =
    "0" + durationSeconds;
  }

  if (!isNaN(durationSeconds)) {

    duration.innerText =
    `${durationMinutes}:${durationSeconds}`;
  }
}


// SEEK / SKIP FUNCTION
progressContainer.addEventListener(
  "click",
  setProgress
);

function setProgress(e) {

  let width =
  this.clientWidth;

  let clickX =
  e.offsetX;

  let duration =
  audio.duration;

  audio.currentTime =
  (clickX / width) * duration;
}


// VOLUME CONTROL
volume.addEventListener(
  "input",
  function () {

    audio.volume =
    volume.value;
  }
);


// AUTO PLAY NEXT SONG
audio.addEventListener(
  "ended",
  nextSong
);
// INITIAL LOAD
loadSong();