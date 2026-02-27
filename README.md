# 64 West Records Website

A streaming music website for the 64 West Records label and artists.

## Quick Start - Local Testing

### Option 1: Python HTTP Server (Recommended)
```bash
cd porch-light-records-site
python -m http.server 8000
```

Then open: **http://localhost:8000**

### Option 2: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

## File Structure

```
porch-light-records-site/
├── index.html              # Homepage
├── albums/                 # Album pages
│   └── vexra-human.html   # Example album page
├── assets/
│   ├── css/
│   │   └── styles.css     # All styling
│   ├── js/
│   │   └── player.js      # Audio player logic
│   ├── images/            # Album covers (add here)
│   └── audio/             # MP3 files (add here)
└── README.md
```

## Adding Your Music

### 1. Add Album Covers
Copy your album cover images to `assets/images/`:
- `vexra-human-cover.jpg`
- `vexra-phantom-frequency-cover.jpg`
- `jessie-mae-red-dirt-cover.jpg`
- etc.

### 2. Add MP3 Files
Copy your MP3 tracks to `assets/audio/`:
- `01_Human_(VEXRA_Side).mp3`
- `02_Morning_Person.mp3`
- etc.

### 3. Create More Album Pages
Use `albums/vexra-human.html` as a template. Copy it and modify:
1. Change album title, artist, cover image
2. Update tracklist with track names
3. Update `data-track` attributes with MP3 filenames

## Deploying to Netlify

### Option 1: Drag & Drop
1. Go to https://app.netlify.com/drop
2. Drag the entire `porch-light-records-site` folder
3. Done! Get your live URL

### Option 2: Git + Netlify (Recommended)
```bash
cd porch-light-records-site
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then in Netlify:
1. New site from Git
2. Connect your GitHub repo
3. Deploy!

## Brand Colors

- **Amber**: #F5A623
- **Charcoal**: #1A1A1A
- **Cream**: #FFF8F0
- **Warm Gold**: #D4AF37

## Notes

- Audio files are NOT included in the repo (too large)
- You'll need to manually upload MP3s to `assets/audio/`
- Album covers go in `assets/images/`
- For Netlify, compress large files or use external storage (AWS S3, etc.)

## TODO

- [ ] Create remaining album pages
- [ ] Add all album covers
- [ ] Upload MP3 files
- [ ] Test streaming on mobile
- [ ] Deploy to Netlify
- [ ] Share link with family!
