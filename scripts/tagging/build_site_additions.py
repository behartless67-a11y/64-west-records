#!/usr/bin/env python3
"""
Build HTML additions for all new albums across Elena Voss, Fine Thanks, and Vexra pages.
"""

# ============================================================
# ELENA VOSS PAGE - new albums + Elena/Stella page (new)
# ============================================================

ELENA_NEW_ALBUMS = [
    {
        "slug": "cielo-abierto",
        "folder": "elena-voss-cielo-abierto",
        "title": "Cielo Abierto (2026)",
        "info": "Folk-Pop / Latin Pop • 13 Tracks",
        "desc": "After Raices grounded Elena in love and belonging, Cielo Abierto sets her free to explore the world. This is wanderlust by choice, adventure with a safe harbor to return to. Thirteen tracks trace the journey from departure to return: coastal drives with Sunday Supply, airport sunrises, dancing in foreign cities with HARLOW, overnight trains, desert honesty, and the grateful arrival home. Folk-pop with Latin influences, bright acoustic guitar, shimmering electronic textures, and windows-down energy.",
        "cover": "assets/images/albums/elena-voss-cielo-abierto.jpg",
        "tracks": [
            ("01", "Cielo Abierto"), ("02", "Coastal Highway"), ("03", "Airport Sunrise"),
            ("04", "City You've Never Seen"), ("05", "Mountain Air"), ("06", "Train Through the Night"),
            ("07", "Desert Mirage"), ("08", "Dancing in Another Language"), ("09", "Postcard Home"),
            ("10", "Last Flight"), ("11", "Welcome Mat"), ("12", "Aqui y Alla"),
            ("13", "Festival in a Foreign Country"),
        ]
    },
]

ELENA_STELLA_ALBUMS = [
    {
        "slug": "plainclothes",
        "folder": "elena-stella-plainclothes",
        "title": "Plainclothes (2026)",
        "info": "Folk-Pop / Indie Electronic • 10 Tracks",
        "desc": "The debut album from Elena Voss and Stella Hartley. Masks off, no performance, just them. Acoustic foundation with electronic shimmer. Elena grounds things, Stella electrifies them. Ten tracks about the private language of knowing someone completely.",
        "cover": "assets/images/albums/elena-stella-plainclothes.jpg",
        "tracks": [
            ("01", "Second Language"), ("02", "You Go First"), ("03", "Same Ceiling"),
            ("04", "Plainclothes"), ("05", "The Loud One"), ("06", "Anchor Point"),
            ("07", "Honest Hours"), ("08", "Different Doors"), ("09", "What You Sound Like"),
            ("10", "Plainclothes (Reprise)"),
        ]
    },
    {
        "slug": "good-trouble",
        "folder": "elena-stella-good-trouble",
        "title": "Good Trouble (2026)",
        "info": "Folk-Pop / Indie Electronic • 10 Tracks",
        "desc": "The sophomore album. Plainclothes was inward. Good Trouble is outward. Marimba as the signature instrument. Stella's restlessness is the engine, Elena's groundedness is the anchor. They get into things, take chances, show up when it costs something.",
        "cover": "assets/images/albums/elena-stella-good-trouble.png",
        "tracks": [
            ("01", "Good Trouble"), ("02", "Her Idea"), ("03", "We Stayed"),
            ("04", "Running Interference"), ("05", "The Loud Room"), ("06", "Slow Down (Don't)"),
            ("07", "What We Built"), ("08", "Show Up"), ("09", "The Quiet After"),
            ("10", "Still Getting Into It"),
        ]
    },
    {
        "slug": "tierra",
        "folder": "elena-stella-tierra",
        "title": "Tierra (2026)",
        "info": "Flamenco-Pop / Indie Folk • 10 Tracks",
        "desc": "The third album. Spanish guitar, palmas, Elena's Latin roots fully unleashed. What lives below language. Elena bilingual throughout, Stella anchoring in English. The things that don't need translation: rhythm, roots, heritage, the 4AM hour.",
        "cover": "assets/images/albums/elena-stella-tierra.png",
        "tracks": [
            ("01", "Palmas"), ("02", "Lluvia"), ("03", "Mercado"),
            ("04", "Lengua"), ("05", "Brasa"), ("06", "Madrugada"),
            ("07", "Corriente"), ("08", "Herencia"), ("09", "Quietud"),
            ("10", "Tierra"),
        ]
    },
    {
        "slug": "collateral",
        "folder": "elena-stella-collateral",
        "title": "Collateral (2026)",
        "info": "Hyperpop / Dark Pop • 10 Tracks • Explicit",
        "desc": "The fourth album. Everything they've broken, complicated, crashed, and left better. PC Music energy, Charli XCX sharpness. Not an apology, a receipt. Two real women being chaotic and joyful and not sorry.",
        "cover": "assets/images/albums/elena-stella-collateral.png",
        "tracks": [
            ("01", "We Broke It"), ("02", "Too Interesting"), ("03", "Collateral"),
            ("04", "Fast"), ("05", "Roto"), ("06", "Both Our Faults"),
            ("07", "Nobody Asked"), ("08", "Aftermath"), ("09", "Fixed It Worse"),
            ("10", "Collateral (Reprise)"),
        ]
    },
]

# ============================================================
# FINE THANKS PAGE - new albums
# ============================================================

FINE_THANKS_NEW_ALBUMS = [
    {
        "slug": "cheers-we-guess",
        "folder": "fine-thanks-cheers-we-guess",
        "title": "Cheers, We Guess (2026)",
        "info": "British Indie Rock • 11 Tracks",
        "desc": "Fine Thanks observe the American Fourth of July from the inside. Bewildered affection, not trash talk. The flags. The fireworks starting Thursday. Gerald the dog. The fax machine they sent love notes on. Sam delivers observations flat like a nature documentary narrator. Jess cannot process any of it. Track 11 is where they finally admit they love all of it.",
        "cover": "assets/images/albums/fine-thanks-cheers-we-guess.png",
        "tracks": [
            ("01", "Happy Treason Day"), ("02", "The Flags"), ("03", "They've Been Going Since Thursday"),
            ("04", "Parking"), ("05", "Red White and Blue Everything"), ("06", "The Dog"),
            ("07", "Two AM Firework"), ("08", "Freedom"), ("09", "We Brought Biscuits"),
            ("10", "It's So Hot"), ("11", "Honestly Though"),
        ]
    },
    {
        "slug": "open-to-anything",
        "folder": "fine-thanks-open-to-anything",
        "title": "Open to Anything (Within Reason) (2026)",
        "info": "British Indie Rock • 12 Tracks • Explicit",
        "desc": "Fine Thanks enter the absolute warzone of modern dating. Apps, dates, the bedroom, the aftermath. Sam delivers the wreckage in flat Manchester deadpan. Jess panics and harmonizes the worst details. Filth recounted like a customer complaint. The warmth is real underneath every disaster.",
        "cover": "assets/images/albums/fine-thanks-open-to-anything.png",
        "tracks": [
            ("01", "Six Foot Two (He Was Not)"), ("02", "Unsolicited"), ("03", "Show Me Yours"),
            ("04", "Choke Me We've Met Twice"), ("05", "Finish on My What"), ("06", "Two Pumps"),
            ("07", "Daddy Issues"), ("08", "He Came, I Didn't"), ("09", "Ninety Minutes"),
            ("10", "Left on Read"), ("11", "Teeth"), ("12", "Actually Quite Nice"),
        ]
    },
    {
        "slug": "thirty-thousand-feet",
        "folder": "fine-thanks-thirty-thousand-feet",
        "title": "Thirty Thousand Feet of Bullshit (2026)",
        "info": "British Indie Rock • 10 Tracks",
        "desc": "Fine Thanks take on air travel. The bag fees, the boarding groups, the middle seat, Spirit Airlines, TSA theater, the crying baby symphony. Sam catalogues every indignity with deadpan precision. Jess spirals. They survive.",
        "cover": "assets/images/albums/fine-thanks-thirty-thousand-feet.jpg",
        "tracks": [
            ("01", "6 AM"), ("02", "At Least We Didn't Crash"), ("03", "Bag Fees"),
            ("04", "Boarding Group 9"), ("05", "Crying Baby Symphony"), ("06", "Middle Seat"),
            ("07", "Mini Bottle Collection"), ("08", "Spirit Airlines"), ("09", "TSA Theater"),
            ("10", "Window Seat Hostage"),
        ]
    },
    {
        "slug": "goodbye-timmy",
        "folder": "fine-thanks-goodbye-timmy",
        "title": "Goodbye Timmy (2026)",
        "info": "British Indie Rock • 9 Tracks",
        "desc": "Fine Thanks tackle the workplace. A colleague leaves, a performance review is delivered, a supervisor announces themselves, gardening leave is contemplated. The Cardboard King. The Pink Slip. Sam and Jess survive corporate life with their deadpan intact.",
        "cover": "assets/images/albums/fine-thanks-goodbye-timmy.jpg",
        "tracks": [
            ("01", "Timmy"), ("02", "Out of Office (Forever)"), ("03", "Performance Review"),
            ("04", "I Am Your Supervisor"), ("05", "Let's Take This Offline"), ("06", "Gardening Leave"),
            ("07", "World's Best Boss"), ("08", "Cardboard King"), ("09", "Pink Slip"),
        ]
    },
]

# ============================================================
# VEXRA PAGE - new albums
# ============================================================

VEXRA_NEW_ALBUMS = [
    {
        "slug": "ordinary-world",
        "folder": "vexra-ordinary-world",
        "title": "Ordinary World (2026)",
        "info": "Melodic Dubstep • 12 Tracks",
        "desc": "Vexra finds intensity in the places nobody expected to look. Tuesday afternoons. The car in a parking lot after the errand is done. A backyard on a hot Saturday with nowhere to be. The mundane becomes enormous by the right drop at the right moment. No festivals. No stages. No city nights. Just the world as it actually is.",
        "cover": "assets/images/albums/vexra-ordinary-world.png",
        "tracks": [
            ("01", "Tuesday"), ("02", "Grocery Run"), ("03", "Back Porch"),
            ("04", "Voicemail"), ("05", "Car AC"), ("06", "Overcast"),
            ("07", "Leftovers"), ("08", "Neighbor's Mower"), ("09", "Ice in Glass"),
            ("10", "Half Done"), ("11", "Barefoot on Concrete"), ("12", "Sunday 6PM"),
        ]
    },
    {
        "slug": "no-rest",
        "folder": "vexra-no-rest",
        "title": "No Rest (2026)",
        "info": "EDM / Electronic • 16 Tracks • Explicit",
        "desc": "Vexra's workout compilation. EDM backbone throughout. Classic arc from warm-up to peak to cool-down. Features Turn Up Syndicate, MACH-6, and Crimson Verdict. 110 BPM to 160 BPM. Built for the gym, built for maximum effort. No rest.",
        "cover": "assets/images/albums/vexra-no-rest.png",
        "tracks": [
            ("01", "Power On"), ("02", "No Days Off (feat. Turn Up Syndicate)"), ("03", "Locked In"),
            ("04", "Chop It Up (feat. MACH-6)"), ("05", "Hard Reset"), ("06", "Beautiful Brutality (feat. Crimson Verdict)"),
            ("07", "Drop Zone"), ("08", "Full Send (feat. MACH-6)"), ("09", "Maximum"),
            ("10", "Destroy Everything (feat. Crimson Verdict)"), ("11", "No Rest (feat. Turn Up Syndicate)"), ("12", "Absolute Zero"),
            ("13", "Last Rep (feat. MACH-6)"), ("14", "Redline"), ("15", "Come Down"),
            ("16", "Still Standing"),
        ]
    },
    {
        "slug": "skin-contact-2",
        "folder": "vexra-skin-contact-2",
        "title": "Skin Contact 2.0 (2026)",
        "info": "Dark Electronic • 12 Tracks",
        "desc": "The return to sensory electronic intimacy. Drift, linger, trace. Twelve tracks about texture, proximity, the physical language of closeness. Features KINDL1NG on two tracks. Quieter than the industrial era, more present.",
        "cover": "assets/images/albums/vexra-skin-contact-2.png",
        "tracks": [
            ("01", "Drift (feat. KINDL1NG)"), ("02", "Linger"), ("03", "Trace"),
            ("04", "Roce"), ("05", "Mark"), ("06", "Salt"),
            ("07", "Niebla"), ("08", "Pulse"), ("09", "Tender"),
            ("10", "Veil"), ("11", "Hush"), ("12", "Wake (feat. KINDL1NG)"),
        ]
    },
    {
        "slug": "teeth-and-tenderness",
        "folder": "vexra-teeth-and-tenderness",
        "title": "Teeth and Tenderness (2026)",
        "info": "Dark Electronic • 12 Tracks",
        "desc": "The duality album. Throne of Teeth to Both Mouths. Finding art in brutality, power in destruction, tenderness in the sharp places. Vexra at her most theatrically dark while keeping the warmth underneath.",
        "cover": "assets/images/albums/vexra-teeth-and-tenderness.jpg",
        "tracks": [
            ("01", "Throne of Teeth"), ("02", "Devour Me Slow"), ("03", "Sharp Mercy"),
            ("04", "Holy Riot"), ("05", "Same Mouth"), ("06", "Marked"),
            ("07", "Wreckage Worship"), ("08", "Tenderized"), ("09", "Fang and Halo"),
            ("10", "Pretty Beast"), ("11", "Stay and Slay"), ("12", "Both Mouths"),
        ]
    },
    {
        "slug": "garras-y-gracia",
        "folder": "vexra-garras-y-gracia",
        "title": "Garras y Gracia (2026)",
        "info": "Dark Electronic / Latin Pop • 12 Tracks",
        "desc": "Claws and grace. Vexra and Elena Voss in full Latin collaboration. Spanish throughout, the language of the body, the wolf, the grandmother, the faith. From Traduccion to Entera / Whole, an album about what you carry in two languages.",
        "cover": "assets/images/albums/vexra-garras-y-gracia.jpg",
        "tracks": [
            ("01", "Traduccion"), ("02", "La Loba"), ("03", "Sangre y Santos"),
            ("04", "Garras y Gracia"), ("05", "Bendita Loba"), ("06", "Mi Sombra en Dos Idiomas"),
            ("07", "Tatuaje"), ("08", "Noche de Abuela"), ("09", "Idioma del Cuerpo"),
            ("10", "Fuego y Fe"), ("11", "Como Duele"), ("12", "Entera Whole"),
        ]
    },
    {
        "slug": "beautiful-damage-remix",
        "folder": "vexra-beautiful-damage-remix",
        "title": "Beautiful Damage (Remix) (2026)",
        "info": "Dark Electronic / Alt-Rock • 11 Tracks",
        "desc": "The debut reimagined. Beautiful Damage and its companion tracks reworked with new production, new textures, and a decade of hindsight. The original chaos, refined but not softened.",
        "cover": "assets/images/albums/vexra-beautiful-damage-remix.jpg",
        "tracks": [
            ("01", "Beautiful Damage"), ("02", "Riot Queen"), ("03", "Wolves (Teeth Like Diamonds)"),
            ("04", "Numb"), ("05", "Wired"), ("06", "After Hours"),
            ("07", "Shatter"), ("08", "Gravity"), ("09", "Vertigo"),
            ("10", "Dawn Through Wreckage"), ("11", "First Light"),
        ]
    },
]

def make_track_html(folder, tracks, indent="            "):
    lines = []
    for num, title in tracks:
        filename = f"{num} - {folder.replace('-', ' ').title().replace(' ', ' ')} - {title}.mp3"
        # Use actual filename pattern
        lines.append(f'''{indent}<div class="compact-track" data-track="{folder}/{num} - {title}.mp3">
{indent}    <span class="track-num">{num}</span>
{indent}    <span class="track-name">{title}</span>
{indent}    <button class="compact-play-btn">&#9654;</button>
{indent}</div>''')
    return "\n".join(lines)

def make_album_html(album, folder_key):
    slug = album["slug"]
    folder = album["folder"]
    title = album["title"]
    info = album["info"]
    desc = album["desc"]
    cover = album.get("cover", "assets/images/placeholder.png")

    tracks_html = []
    for num, track_title in album["tracks"]:
        tracks_html.append(f'''            <div class="compact-track" data-track="{folder}/{num} - {track_title}.mp3">
                <span class="track-num">{num}</span>
                <span class="track-name">{track_title}</span>
                <button class="compact-play-btn">&#9654;</button>
            </div>''')

    return {
        "carousel": f'''                <div class="album-cover-item" data-album="{slug}">
                    <img src="{cover}" alt="{title}">
                </div>''',
        "tracklist": f'''        <div class="album-tracklist" id="{slug}-tracklist">
{chr(10).join(tracks_html)}
        </div>''',
        "description": f'''        <div class="album-description-block" id="{slug}-description">
            <h3>{title}</h3>
            <p class="album-info" style="color: #8a7c94; margin-bottom: 1rem;">{info}</p>
            <p>{desc}</p>
        </div>'''
    }

# Generate output
print("=" * 60)
print("ELENA VOSS page additions (solo albums)")
print("=" * 60)
for album in ELENA_NEW_ALBUMS:
    html = make_album_html(album, "elena")
    print(f"\n--- {album['slug'].upper()} CAROUSEL ---")
    print(html["carousel"])
    print(f"\n--- {album['slug'].upper()} TRACKLIST ---")
    print(html["tracklist"])
    print(f"\n--- {album['slug'].upper()} DESCRIPTION ---")
    print(html["description"])

print("\n" + "=" * 60)
print("ELENA/STELLA page (need new page artist-elena-stella.html)")
print("=" * 60)
for album in ELENA_STELLA_ALBUMS:
    html = make_album_html(album, "elena-stella")
    print(f"\n--- {album['slug'].upper()} CAROUSEL ---")
    print(html["carousel"])

print("\n" + "=" * 60)
print("FINE THANKS page additions")
print("=" * 60)
for album in FINE_THANKS_NEW_ALBUMS:
    html = make_album_html(album, "fine-thanks")
    print(f"\n--- {album['slug'].upper()} CAROUSEL ---")
    print(html["carousel"])

print("\n" + "=" * 60)
print("VEXRA page additions")
print("=" * 60)
for album in VEXRA_NEW_ALBUMS:
    html = make_album_html(album, "vexra")
    print(f"\n--- {album['slug'].upper()} CAROUSEL ---")
    print(html["carousel"])
