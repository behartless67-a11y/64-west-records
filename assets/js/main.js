// Main JavaScript for 64 West Records Homepage

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all album cards
document.querySelectorAll('.album-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Audio Player
const audioPlayer = document.getElementById('audioPlayer');
const audioElement = document.getElementById('audioElement');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const progressBarContainer = document.querySelector('.progress-bar-container');
const timeDisplay = document.getElementById('timeDisplay');

// Sample tracks from different albums for demo
const featuredTracks = [
    { file: '01_Beautiful_Damage.mp3', title: 'Beautiful Damage', artist: 'Vexra' },
    { file: '01_Red_Dirt_Morning.mp3', title: 'Red Dirt Morning', artist: 'Jessie Mae Thornton' },
    { file: '01_Phantom_Intro.mp3', title: 'Phantom Intro', artist: 'Vexra' },
    { file: '01_Hey_Gurl.mp3', title: 'Hey Gurl', artist: 'Ben James' }
];

let currentTrackIndex = 0;

// Load a random track on page load (optional - for demo)
window.addEventListener('load', () => {
    currentTrackIndex = Math.floor(Math.random() * featuredTracks.length);
    loadTrack(currentTrackIndex);
});

function loadTrack(index) {
    const track = featuredTracks[index];
    audioElement.src = `assets/audio/${track.file}`;
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    audioPlayer.classList.add('active');
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audioElement.pause();
        playPauseBtn.textContent = '▶';
    }
});

// Auto-play next track when current ends
audioElement.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % featuredTracks.length;
    loadTrack(currentTrackIndex);
    audioElement.play();
});

// Update button state when audio is paused/played
audioElement.addEventListener('play', () => {
    playPauseBtn.textContent = '⏸';
});

audioElement.addEventListener('pause', () => {
    playPauseBtn.textContent = '▶';
});

// Update progress bar and time
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.width = progress + '%';

    const currentMinutes = Math.floor(audioElement.currentTime / 60);
    const currentSeconds = Math.floor(audioElement.currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(audioElement.duration / 60);
    const durationSeconds = Math.floor(audioElement.duration % 60).toString().padStart(2, '0');

    if (!isNaN(audioElement.duration)) {
        timeDisplay.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
    }
});

// Seek functionality
progressBarContainer.addEventListener('click', (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioElement.currentTime = percent * audioElement.duration;
});
