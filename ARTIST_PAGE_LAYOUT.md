# Artist Page Layout Pattern

## Overview
A single-page artist layout with horizontal album carousel and three-column content display.

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Back Link                                                   │
├─────────────────────────────────────────────────────────────┤
│  Album Carousel (Horizontal, Left-Aligned)                  │
│  [◄] [CD] [CD] [CD] [CD] [CD] [CD] [CD*Active] [►]        │
├─────────────────────────────────────────────────────────────┤
│  Column 1 (33%)    │  Column 2 (33%)   │  Column 3 (33%)   │
│  ┌───────────────┐ │ ┌───────────────┐ │ ┌───────────────┐ │
│  │ About Artist  │ │ │  Tracklist    │ │ │ Album Info    │ │
│  │               │ │ │               │ │ │               │ │
│  │ (Static bio)  │ │ │  (Dynamic)    │ │ │  (Dynamic)    │ │
│  │               │ │ │               │ │ │               │ │
│  └───────────────┘ │ └───────────────┘ │ └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Key Features

### Album Carousel
- **Position**: Left-aligned (`justify-content: flex-start`)
- **Padding**: `2rem 2rem`
- **Album Covers**: 240px × 240px
- **Active State**: `scale(1.1)` with gold shadow
- **Inactive State**: `opacity: 0.4`, `scale(0.85)`, grayscale + darkened
- **Navigation**: Prev/Next buttons positioned absolute at left/right

### Three-Column Grid
- **Grid**: `grid-template-columns: 1fr 1fr 1fr`
- **Gap**: `1.5rem`
- **Alignment**: `align-items: start`

### Column 1: Artist Bio (Static)
- **Content**: Full artist biography (all albums)
- **Layout**: Single column text
- **Container**: Transparent background with gold border
- **Padding**: `1.5rem`

### Column 2: Tracklist (Dynamic)
- **Content**: Changes per album selection
- **Container**: Same styling as bio
- **Tracks**:
  - Transparent background by default
  - Hover: `rgba(212, 165, 116, 0.1)`
  - Track number, title, and play button

### Column 3: Album Description (Dynamic)
- **Content**: Changes per album selection
- **Container**: Same styling as bio
- **Includes**: Album title, year, genre, description, lyrics link

## CSS Key Classes

```css
/* Carousel */
.album-carousel { justify-content: flex-start; padding: 2rem; }
.album-cover-item { width: 240px; height: 240px; }
.album-cover-item.active { transform: scale(1.1); }
.album-cover-item:not(.active) { opacity: 0.4; transform: scale(0.85); }

/* Grid Layout */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}

/* Cards */
.artist-bio, .album-tracklist, .album-description-block {
  padding: 1.5rem;
  background: transparent;
  border: 1px solid rgba(212, 165, 116, 0.2);
  border-radius: 12px;
}

/* Headers */
.artist-bio h3, .album-description-block h3, .album-tracklist h3 {
  margin: 0 0 1rem 0;
  color: #d4a574;
  font-size: 1.5rem;
  font-weight: 600;
}

/* Tracks */
.compact-track {
  background: transparent;
  padding: 1.2rem 1rem;
  margin-bottom: 0.8rem;
}
.compact-track:hover {
  background: rgba(212, 165, 116, 0.1);
}
```

## JavaScript Structure

```javascript
// Switch between albums
function switchToAlbum(index) {
  // Update active album cover
  albumCovers.forEach(c => c.classList.remove('active'));
  albumCovers[index].classList.add('active');

  // Update tracklist
  const albumId = albumCovers[index].dataset.album;
  albumTracklists.forEach(t => t.classList.remove('active'));
  document.getElementById(`${albumId}-tracklist`).classList.add('active');

  // Update description
  albumDescriptions.forEach(d => d.classList.remove('active'));
  document.getElementById(`${albumId}-description`).classList.add('active');
}
```

## HTML Structure Pattern

```html
<!-- Column 1: Static Bio -->
<div class="artist-bio">
  <h3>About the Artist</h3>
  <p>Full biography...</p>
</div>

<!-- Column 2: Dynamic Tracklists -->
<div class="tracklist-container">
  <div id="album-name-tracklist" class="album-tracklist">
    <h3>Tracklist</h3>
    <div class="compact-tracklist">
      <div class="compact-track" data-track="Song.mp3">
        <span class="compact-track-number">01</span>
        <span class="compact-track-title">Song Title</span>
        <button class="compact-track-play">▶</button>
      </div>
    </div>
  </div>
</div>

<!-- Column 3: Dynamic Descriptions -->
<div class="description-container">
  <div id="album-name-description" class="album-description-block">
    <h3>Album Name (Year)</h3>
    <p class="album-info">Genre • Track Count</p>
    <p>Description...</p>
    <a href="lyrics/album.html" class="lyrics-button">View Full Lyrics</a>
  </div>
</div>
```

## Benefits
- **No vertical scrolling** - Everything fits on one screen
- **Easy navigation** - Click any album cover to switch content
- **Clear organization** - Bio always visible, tracklist and description update dynamically
- **Maximum horizontal space** - Full-width layout with minimal padding

## Responsive Breakpoints
- **< 1400px**: Stack to single column, bio becomes 2-column
- **< 1024px**: Bio becomes single column

## Use Cases
- Multi-album artists (like VEXRA/Elena Voss with 7 albums)
- Artist pages where bio context is important
- When you want all albums accessible without scrolling
