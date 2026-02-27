// Audio Player JavaScript
const audioPlayer = document.getElementById('audioPlayer');
const audioElement = document.getElementById('audioElement');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');

let currentTrackIndex = 0;
let tracks = [];
let isPlaying = false;

// Initialize tracks from the page
function initTracks() {
    const trackItems = document.querySelectorAll('.track-item');
    tracks = Array.from(trackItems).map(item => ({
        element: item,
        file: item.dataset.track,
        title: item.querySelector('.track-title').textContent,
        artist: item.querySelector('.track-artist').textContent,
        button: item.querySelector('.play-button')
    }));

    // Add click listeners to all track items
    tracks.forEach((track, index) => {
        track.element.addEventListener('click', () => {
            loadTrack(index);
            playTrack();
        });
    });
}

// Load a track by index
function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    currentTrackIndex = index;
    const track = tracks[index];

    // Update audio source
    audioElement.src = `../assets/audio/${track.file}`;

    // Update now playing info
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;

    // Show player
    audioPlayer.classList.add('active');

    // Update button states
    updateButtonStates();
}

// Play the current track
function playTrack() {
    audioElement.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
    tracks[currentTrackIndex].button.textContent = '⏸';
    tracks[currentTrackIndex].button.classList.add('playing');
}

// Pause the current track
function pauseTrack() {
    audioElement.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    tracks[currentTrackIndex].button.textContent = '▶';
    tracks[currentTrackIndex].button.classList.remove('playing');
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

// Play next track
function nextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        pauseTrack();
        loadTrack(currentTrackIndex + 1);
        playTrack();
    }
}

// Play previous track
function prevTrack() {
    if (currentTrackIndex > 0) {
        pauseTrack();
        loadTrack(currentTrackIndex - 1);
        playTrack();
    }
}

// Update button states
function updateButtonStates() {
    // Reset all buttons
    tracks.forEach(track => {
        track.button.textContent = '▶';
        track.button.classList.remove('playing');
    });

    // Update current track button
    if (isPlaying) {
        tracks[currentTrackIndex].button.textContent = '⏸';
        tracks[currentTrackIndex].button.classList.add('playing');
    }
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Auto-play next track when current ends
audioElement.addEventListener('ended', () => {
    if (currentTrackIndex < tracks.length - 1) {
        nextTrack();
    } else {
        pauseTrack();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTracks);
