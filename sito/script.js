// Lista delle canzoni (in un progetto reale queste sarebbero caricate dal server)
const songs = [
    { title: "monotono", file: "songs/RG - monotono.wav" },
    { title: "foto mosse", file: "songs/19 Foto mosse demo 1.mp3" },
    { title: "mood", file: "songs/19 Foto mosse demo 1.mp3" }
];

// Elementi del DOM
const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

// Funzione per creare la lista delle canzoni
function populateSongList() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.dataset.file = song.file;
        li.addEventListener("click", () => playSong(song.file));
        songList.appendChild(li);
    });
}

// Funzione per riprodurre una canzone
function playSong(file) {
    audioSource.src = file;
    audioPlayer.load();
    audioPlayer.play();
}

// Inizializza la lista
populateSongList();