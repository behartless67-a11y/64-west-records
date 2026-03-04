// Inline Audio Player JavaScript for Album Pages
const audioElement = document.getElementById('audioElement');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playerTitle = document.querySelector('.player-title');
const playerArtist = document.querySelector('.player-artist');
const timeCurrent = document.querySelector('.time-current');
const timeTotal = document.querySelector('.time-total');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');

let currentTrackIndex = -1;
let tracks = [];
let isPlaying = false;

// Initialize tracks from the page
function initTracks() {
    const trackItems = document.querySelectorAll('.track-item');
    tracks = Array.from(trackItems).map((item, index) => ({
        element: item,
        file: item.dataset.track,
        title: item.querySelector('.track-title').textContent,
        artist: item.querySelector('.track-artist').textContent,
        button: item.querySelector('.play-button'),
        index: index
    }));

    // Add click listeners to all track items
    tracks.forEach((track) => {
        track.element.addEventListener('click', (e) => {
            e.preventDefault();
            loadTrack(track.index);
            playTrack();
        });
    });
}

// Load a track by index
function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    currentTrackIndex = index;
    const track = tracks[index];

    // Get album folder from URL path
    const pathParts = window.location.pathname.split('/');
    const albumPage = pathParts[pathParts.length - 1];

    // Map album pages to their audio folders
    const audioFolders = {
        'tyler-jake-aged-perfection.html': 'tyler-jake-aged-perfection',
        'colt-ramsey-lake-days-late-nights.html': 'colt-ramsey-lake-days',
        'ben-james-hey-gurl.html': 'ben-james-hey-gurl',
        'jessie-mae-red-dirt.html': 'jessie-mae-red-dirt',
        'jessie-mae-frost-foxglove.html': 'jessie-mae-frost-foxglove',
        'jessie-mae-cheap-seats.html': 'jessie-mae-cheap-seats',
        'mach6-terminal-velocity.html': 'mach6-terminal-velocity',
        'vexra-beautiful-damage.html': 'vexra-beautiful-damage',
        'vexra-phantom-frequency.html': 'vexra-phantom-frequency',
        'vexra-skin-static.html': 'vexra-skin-static',
        'vexra-human.html': 'vexra-human',
        'vexra-venom-heart.html': 'vexra-venom-heart',
        'vexra-icon.html': 'vexra-icon',
        'elena-voss-luminous.html': 'elena-voss-luminous',
        'blackridge-iron-gospel.html': 'blackridge-iron-gospel'
    };

    const audioFolder = audioFolders[albumPage] || 'unknown';
    const audioPath = `../assets/audio/${audioFolder}/${track.file}`;

    // Update audio source
    audioElement.src = audioPath;

    // Update player display
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;

    // Update track highlighting
    updateTrackHighlighting();

    // Reset progress
    progressFill.style.width = '0%';
    timeCurrent.textContent = '0:00';
}

// Play the current track
function playTrack() {
    if (currentTrackIndex === -1) {
        loadTrack(0);
    }

    audioElement.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
    updatePlayButtonStates();
}

// Pause the current track
function pauseTrack() {
    audioElement.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    updatePlayButtonStates();
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
        loadTrack(currentTrackIndex + 1);
        playTrack();
    }
}

// Play previous track
function prevTrack() {
    if (currentTrackIndex > 0) {
        loadTrack(currentTrackIndex - 1);
        playTrack();
    }
}

// Update track highlighting in the list
function updateTrackHighlighting() {
    tracks.forEach((track, index) => {
        if (index === currentTrackIndex) {
            track.element.classList.add('playing');
            track.button.textContent = isPlaying ? '⏸' : '▶';
        } else {
            track.element.classList.remove('playing');
            track.button.textContent = '▶';
        }
    });
}

// Update all play button states
function updatePlayButtonStates() {
    tracks.forEach((track, index) => {
        if (index === currentTrackIndex) {
            track.button.textContent = isPlaying ? '⏸' : '▶';
        }
    });
}

// Format time in mm:ss
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update progress bar
function updateProgress() {
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progressFill.style.width = `${percent}%`;
    timeCurrent.textContent = formatTime(audioElement.currentTime);
}

// Seek in the track
function seek(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioElement.currentTime = percent * audioElement.duration;
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
progressBar.addEventListener('click', seek);

audioElement.addEventListener('timeupdate', updateProgress);
audioElement.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(audioElement.duration);
});
audioElement.addEventListener('ended', () => {
    nextTrack();
});
audioElement.addEventListener('play', () => {
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
    updatePlayButtonStates();
});
audioElement.addEventListener('pause', () => {
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    updatePlayButtonStates();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTracks);
