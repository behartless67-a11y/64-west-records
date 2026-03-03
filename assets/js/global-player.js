// Global Music Player with Artist/Album/Track Browser
const musicCatalog = {
    "Vexra": {
        "Beautiful Damage": [
            "Beautiful Damage", "Sleepwalker", "Glass Heart feat SPECTRA", "Underworld",
            "Riot Queen", "Body Electric", "Fracture", "Kitchen Floor", "Venom feat MACH-6",
            "Echo Chamber"
        ],
        "Phantom Frequency": [
            "Phantom Frequency", "Vertigo", "Performer", "Numb", "Signal Lost",
            "Armor Off", "Shatter", "Gravity", "Ghost of the Mask", "Dawn"
        ],
        "Skin & Static": [
            "Skin & Static", "Vertigo", "Wolves", "Numb", "Bleed Through",
            "After Hours", "Hellfire & Honeysuckle feat Jessie Mae Thornton and VEXRA",
            "Sixteen", "Wired", "Strongest Woman", "Collision", "Unstoppable feat VEXRA and Jessie Mae Thornton"
        ],
        "Human": [
            "Human (VEXRA Side)", "Morning Person", "Cancun With You", "Voicemail from Mom",
            "Feed Your Soul", "Hey Gurl", "Two Names", "Deeper", "Slow Dance in the Kitchen",
            "Elena", "Surrender", "Whole"
        ],
        "Venom Heart": [
            "Venom Heart", "Appetite", "White Room", "Drip", "Sacrilege",
            "Throat", "Venom IV (Solo)", "Pretty When I Bite", "Sweat & Scripture",
            "Devour", "Afterglow", "Free (The Final Light)"
        ],
        "Icon": [
            "Radio Edit", "Sellout", "Platinum", "Industry Plant", "Pop Star",
            "Mainstream Damage", "TikTok", "Festival Headliner", "Icon", "Billboard"
        ]
    },
    "Jessie Mae Thornton": {
        "Red Dirt & Rhododendron": [
            "Red Dirt And Rhododendron", "Baptized In The Blue Ridge", "Gravel And Grace",
            "Saturday Night Staunton", "Mama's Kitchen", "Whiskey Don't Lie", "Tailgate Gospel",
            "Borrowed Time, Broken Lines", "Wildflower Woman", "64 West", "Porch Light On",
            "Last Call at the Piedmont"
        ],
        "Frost & Foxglove": [
            "Frost & Foxglove", "Foxglove Girl", "Too Tender for the Thorns",
            "The Leaving Was The Quiet Part", "First Snow", "Hollow", "November Porch",
            "I Loved You in a Small Town", "Headlights on the Hollow", "What the River Kept",
            "Virginia, Hold Me", "Granddaddy's Hands"
        ],
        "Cheap Seats & Good Company": [
            "Cheap Seats & Good Company", "Boots Off, Bonfire On", "Beer Run Babysitter",
            "Girls' Night Commandments", "Truck Bed Theology", "Two Drinks Behind",
            "Hell of a Tuesday", "Whole Damn Town", "Pretty When I'm Loud",
            "Closing Time Confessional", "Somebody's Ex", "Kitchen Table Hymn"
        ]
    },
    "MACH-6": {
        "Terminal Velocity": [
            "Terminal Velocity", "Blitz", "Redline", "Chopper", "Glitch",
            "Whiplash", "Afterburner", "Machine Gun", "Lightspeed", "MACH 6"
        ]
    },
    "Colt Ramsey": {
        "Lake Days & Late Nights": [
            "Lake Days & Late Nights", "Smith Mountain Memories", "Boat Beers",
            "Backroads & Bonfires", "Blue Ridge View", "Dive Bar Queen",
            "Cooler Full of Memories", "Waffle House at 2AM", "Tan Lines",
            "Virginia Boy", "One More Summer", "Porch Light On"
        ]
    },
    "BLACKRIDGE": {
        "Iron Gospel": [
            "Iron Gospel", "Teeth", "Control", "Bruise", "Filthy",
            "God Complex", "Confession Booth", "Obsession", "Overdose",
            "Dawn 2", "Face", "Still Her (Jessie Mae's Quiet Moment)",
            "First Light", "Twenty Years Deep"
        ]
    },
    "Ben James": {
        "Hey Gurl": [
            "Always and Forever", "Better Man", "Coronado", "Face"
        ]
    }
};

class GlobalMusicPlayer {
    constructor() {
        this.audioElement = document.getElementById('globalAudioElement');
        this.artistSelect = document.getElementById('artistSelect');
        this.albumSelect = document.getElementById('albumSelect');
        this.trackList = document.getElementById('trackList');
        this.nowPlayingTitle = document.getElementById('globalNowPlayingTitle');
        this.nowPlayingArtist = document.getElementById('globalNowPlayingArtist');
        this.playPauseBtn = document.getElementById('globalPlayPauseBtn');
        this.progressBar = document.getElementById('globalProgressBar');
        this.timeDisplay = document.getElementById('globalTimeDisplay');
        this.minimizeBtn = document.getElementById('playerMinimize');

        this.currentArtist = null;
        this.currentAlbum = null;
        this.currentTrack = null;
        this.isPlaying = false;

        this.init();
    }

    init() {
        this.populateArtists();
        this.attachEventListeners();
    }

    populateArtists() {
        this.artistSelect.innerHTML = '<option value="">Select Artist</option>';
        Object.keys(musicCatalog).forEach(artist => {
            const option = document.createElement('option');
            option.value = artist;
            option.textContent = artist;
            this.artistSelect.appendChild(option);
        });
    }

    populateAlbums(artist) {
        this.albumSelect.innerHTML = '<option value="">Select Album</option>';
        this.albumSelect.disabled = false;

        if (musicCatalog[artist]) {
            Object.keys(musicCatalog[artist]).forEach(album => {
                const option = document.createElement('option');
                option.value = album;
                option.textContent = album;
                this.albumSelect.appendChild(option);
            });
        }
    }

    populateTracks(artist, album) {
        this.trackList.innerHTML = '';

        if (musicCatalog[artist] && musicCatalog[artist][album]) {
            musicCatalog[artist][album].forEach((track, index) => {
                const trackItem = document.createElement('div');
                trackItem.className = 'track-list-item';
                trackItem.textContent = `${index + 1}. ${track}`;
                trackItem.dataset.track = track;
                trackItem.dataset.artist = artist;
                trackItem.dataset.album = album;
                trackItem.dataset.index = index;

                trackItem.addEventListener('click', () => {
                    this.loadAndPlayTrack(artist, album, track, index);
                });

                this.trackList.appendChild(trackItem);
            });
        }
    }

    getAudioPath(artist, album, track, trackIndex) {
        // Convert track name to filename with proper formatting
        let filename;

        // Colt Ramsey uses subfolder
        if (artist === "Colt Ramsey") {
            filename = track + '.mp3';
            return `assets/audio/colt-ramsey-lake-days/${filename}`;
        }

        // Venom Heart and newer albums use clean names (no track numbers)
        const cleanNameAlbums = ["Venom Heart", "Icon"];

        if (cleanNameAlbums.includes(album)) {
            filename = track + '.mp3';
            return `assets/audio/${filename}`;
        }

        // Older albums use numbered format with underscores
        const trackNum = String(trackIndex + 1).padStart(2, '0');
        const cleanName = track.replace(/ /g, '_')
                               .replace(/\(/g, '(')
                               .replace(/\)/g, ')');

        filename = `${trackNum}_${cleanName}.mp3`;
        return `assets/audio/${filename}`;
    }

    loadAndPlayTrack(artist, album, track, trackIndex) {
        this.currentArtist = artist;
        this.currentAlbum = album;
        this.currentTrack = track;

        const audioPath = this.getAudioPath(artist, album, track, trackIndex);
        this.audioElement.src = audioPath;

        this.nowPlayingTitle.textContent = track;
        this.nowPlayingArtist.textContent = `${artist} - ${album}`;

        this.audioElement.play();
        this.isPlaying = true;
        this.playPauseBtn.textContent = '⏸';

        // Update active track in list
        document.querySelectorAll('.track-list-item').forEach(item => {
            item.classList.remove('playing');
            if (item.dataset.track === track) {
                item.classList.add('playing');
            }
        });
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.audioElement.pause();
            this.isPlaying = false;
            this.playPauseBtn.textContent = '▶';
        } else {
            this.audioElement.play();
            this.isPlaying = true;
            this.playPauseBtn.textContent = '⏸';
        }
    }

    updateProgress() {
        if (this.audioElement.duration) {
            const percent = (this.audioElement.currentTime / this.audioElement.duration) * 100;
            this.progressBar.style.width = percent + '%';

            const current = this.formatTime(this.audioElement.currentTime);
            const total = this.formatTime(this.audioElement.duration);
            this.timeDisplay.textContent = `${current} / ${total}`;
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    attachEventListeners() {
        // Artist selection
        this.artistSelect.addEventListener('change', (e) => {
            const artist = e.target.value;
            if (artist) {
                this.currentArtist = artist;
                this.populateAlbums(artist);
                this.trackList.innerHTML = '';
            }
        });

        // Album selection
        this.albumSelect.addEventListener('change', (e) => {
            const album = e.target.value;
            if (album && this.currentArtist) {
                this.currentAlbum = album;
                this.populateTracks(this.currentArtist, album);
            }
        });

        // Play/Pause
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        // Progress update
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());

        // Error handling - try alternate file format if file not found
        this.audioElement.addEventListener('error', () => {
            if (this.audioElement.error && this.audioElement.error.code === 4) {
                // File not found - try clean name format as fallback
                const cleanFilename = this.currentTrack + '.mp3';
                const altPath = `assets/audio/${cleanFilename}`;

                // Only retry once to avoid infinite loop
                if (!this.audioElement.src.includes(cleanFilename)) {
                    console.log('Retrying with clean filename:', altPath);
                    this.audioElement.src = altPath;
                    if (this.isPlaying) {
                        this.audioElement.play();
                    }
                }
            }
        });

        // Auto-play next track
        this.audioElement.addEventListener('ended', () => {
            // Find next track in list
            const trackItems = Array.from(document.querySelectorAll('.track-list-item'));
            const currentIndex = trackItems.findIndex(item => item.classList.contains('playing'));

            if (currentIndex < trackItems.length - 1) {
                const nextTrack = trackItems[currentIndex + 1];
                this.loadAndPlayTrack(
                    nextTrack.dataset.artist,
                    nextTrack.dataset.album,
                    nextTrack.dataset.track,
                    parseInt(nextTrack.dataset.index)
                );
            }
        });

        // Minimize toggle
        if (this.minimizeBtn) {
            this.minimizeBtn.addEventListener('click', () => {
                document.querySelector('.audio-player').classList.toggle('minimized');
                this.minimizeBtn.textContent =
                    document.querySelector('.audio-player').classList.contains('minimized') ? '🎵' : '−';
            });
        }
    }
}

// Initialize player when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('globalAudioElement')) {
        new GlobalMusicPlayer();
    }
});
