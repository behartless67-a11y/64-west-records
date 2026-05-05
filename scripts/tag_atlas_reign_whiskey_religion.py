"""Tag and embed cover art for Atlas Reign - Whiskey Religion album MP3s."""
from pathlib import Path
from mutagen.id3 import ID3, ID3NoHeaderError, TIT2, TPE1, TPE2, TALB, TRCK, TCON, TDRC, TPUB, TCOM, APIC

ALBUM_DIR = Path(r"C:\Users\bh4hb\Box\Ben and Nicole Shared\64 West Records\Atlas Reign - Whiskey Religion")

TRACKS = [
    (1,  "01 - Atlas Reign - Born Again Sinner.mp3",            "Born Again Sinner"),
    (2,  "02 - Atlas Reign - Whiskey Religion.mp3",             "Whiskey Religion"),
    (3,  "03 - Atlas Reign - Saturday Night, Sunday Morning.mp3","Saturday Night, Sunday Morning"),
    (4,  "04 - Atlas Reign - Devil's Got My Number.mp3",        "Devil's Got My Number"),
    (5,  "05 - Atlas Reign - The Long Way Home.mp3",            "The Long Way Home"),
    (6,  "06 - Atlas Reign - Mile Marker 47.mp3",               "Mile Marker 47"),
    (7,  "07 - Atlas Reign - Diesel & Dust.mp3",                "Diesel & Dust"),
    (8,  "08 - Atlas Reign - Three Days From Memphis.mp3",      "Three Days From Memphis"),
    (9,  "09 - Atlas Reign - Holy & Hers.mp3",                  "Holy & Hers"),
    (10, "10 - Atlas Reign - Two Hands & a Wedding Band.mp3",   "Two Hands & a Wedding Band"),
    (11, "11 - Atlas Reign - Smoke Through the Window.mp3",     "Smoke Through the Window"),
    (12, "12 - Atlas Reign - Lord, Forgive Me.mp3",             "Lord, Forgive Me"),
]

ART_NAME = "album-cover.png"

ARTIST = "Atlas Reign"
ALBUM = "Whiskey Religion"
YEAR = "2026"
GENRE = "Outlaw Country / Americana"
LABEL = "64 West Records"
TOTAL = len(TRACKS)


def main():
    missing = [name for _, name, _ in TRACKS if not (ALBUM_DIR / name).exists()]
    if missing:
        print("MISSING SOURCE FILES:")
        for m in missing:
            print(f"  - {m}")
        return

    art_path = ALBUM_DIR / ART_NAME
    if not art_path.exists():
        print(f"No album art found at {art_path}")
        return
    art_data = art_path.read_bytes()
    print(f"Using album art: {art_path.name} ({len(art_data):,} bytes)\n")

    for num, fname, title in TRACKS:
        path = ALBUM_DIR / fname

        try:
            tags = ID3(path)
        except ID3NoHeaderError:
            tags = ID3()

        for frame in ("TIT2", "TPE1", "TPE2", "TALB", "TRCK", "TCON", "TDRC", "TPUB", "TCOM", "APIC"):
            tags.delall(frame)

        tags.add(TIT2(encoding=3, text=title))
        tags.add(TPE1(encoding=3, text=ARTIST))
        tags.add(TPE2(encoding=3, text=ARTIST))
        tags.add(TALB(encoding=3, text=ALBUM))
        tags.add(TRCK(encoding=3, text=f"{num}/{TOTAL}"))
        tags.add(TCON(encoding=3, text=GENRE))
        tags.add(TDRC(encoding=3, text=YEAR))
        tags.add(TPUB(encoding=3, text=LABEL))
        tags.add(TCOM(encoding=3, text=ARTIST))
        tags.add(APIC(encoding=3, mime="image/png", type=3, desc="Cover", data=art_data))

        tags.save(path, v2_version=3)
        print(f"[{num:02d}] tagged -> {title}")

    print(f"\nDone. {TOTAL} tracks tagged with metadata + cover art.")


if __name__ == "__main__":
    main()
