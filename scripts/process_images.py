"""Convert selected job photos to web-ready WebP files.

- Fixes phone rotation, then saves WITHOUT EXIF/GPS (protects customers' home locations).
- 3 widths per photo (480 / 960 / 1600) with descriptive file names.
- Writes src/data/images.json (alt text + sizes) used by the <Img> component.

Run:  npm run images      (originals stay untouched in ../Pictures)
Add a photo: add a line to PHOTOS below and run again.
"""
import json
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "Pictures"
OUT = ROOT / "public" / "img"
DATA = ROOT / "src" / "data" / "images.json"
WIDTHS = [480, 960, 1600]

# key: (source path relative to Pictures, English alt text). Bangla alt text (altBn) is kept in images.json.
PHOTOS = {
    "fan-install-1": ("Photos/IMG-20260607-WA0062.jpg", "Technician installing a ceiling fan in a flat in Uttara"),
    "fan-install-2": ("Photos/IMG-20260607-WA0075.jpg", "Electrician fitting a ceiling fan canopy"),
    "fan-install-3": ("Photos/IMG-20260607-WA0133.jpg", "Ceiling fan being installed and balanced"),
    "socket-1": ("Photos/IMG-20260607-WA0086.jpg", "Electrician replacing a switch board in a flat"),
    "socket-2": ("Photos/IMG-20260607-WA0137.jpg", "Technician drilling to fit a new power socket"),
    "socket-3": ("Photos/IMG-20260607-WA0147.jpg", "Our technician at a customer's flat in uniform"),
    "kitchen-sink": ("Photos/IMG-20260607-WA0109.jpg", "Plumber repairing the water line under a kitchen sink"),
    "chandelier-1": ("Photos/IMG-20260619-WA0046.jpg", "Electrician installing a chandelier on a wooden ceiling"),
    "chandelier-2": ("Photos/IMG-20260619-WA0048.jpg", "Chandelier installation on a ladder"),
    "chandelier-3": ("Photos/IMG-20260619-WA0054.jpg", "Technician connecting a decorative ceiling light"),
    "light-1": ("Photos/IMG-20260619-WA0045.jpg", "Ceiling light installation in a living room"),
    "wall-clock-1": ("Photos/IMG-20260619-WA0044.jpg", "Hanging a wall clock at the right height"),
    "wall-clock-2": ("Photos/IMG-20260619-WA0051.jpg", "Technician fixing a wall clock on a painted wall"),
    "drilling-1": ("Photos/IMG-20260619-WA0042.jpg", "Drilling into a wall to mount a fitting"),
    "drilling-2": ("Photos/IMG-20260619-WA0043.jpg", "Technician drilling for a wall mount"),
    "drilling-3": ("Photos/IMG-20260619-WA0052.jpg", "Wall drilling for a shelf installation"),
    "panel-room-1": ("Photos/IMG-20260904-WA0019.jpg", "Engineer servicing a large main distribution board in a commercial building"),
    "panel-room-2": ("Photos/IMG-20260904-WA0031.jpg", "Technician working on an MDB panel room"),
    "panel-room-3": ("Photos/IMG-20260904-WA0040.jpg", "Electrical panel installation in a commercial building"),
    "panel-room-4": ("Photos/IMG-20260904-WA0045.jpg", "Commercial electrical panel maintenance"),
    "panel-1": ("Photos/IMG_20250206_151241_321.jpg", "Neatly dressed busbars and breakers in a distribution board"),
    "panel-2": ("Photos/IMG_20260903_114055_962.jpg", "Distribution board with breakers and cable dressing"),
    "panel-3": ("Photos/IMG_20260906_164007_811.jpg", "MDB panel with MCCB and busbars after servicing"),
    "panel-4": ("Photos/IMG_20260906_164023_520.jpg", "Distribution board wiring with labelled breakers"),
    "panel-5": ("Photos/IMG_20260923_124809_374.jpg", "MCB and MCCB breakers installed in a DB box"),
    "panel-6": ("Photos/IMG_20260923_185251_968.jpg", "Distribution board with MCCB for AC and power lines"),
    "panel-7": ("Photos/IMG_20261024_111015_872.jpg", "Phase-balanced distribution board with indicator lights"),
    "panel-8": ("Electrical waring and dressing/IMG_20260515_171114_509.jpg", "HRC fuses replaced after an electrical fault"),
    "panel-9": ("Electrical waring and dressing/IMG_20260822_134357_189.jpg", "Rewired distribution board with new breakers"),
    "panel-10": ("Electrical waring and dressing/IMG_20250214_191723_308.jpg", "Commercial electrical panel wiring and contactors"),
    "supershop-1": ("Photos/IMG_20260923_093800_496.jpg", "Technician working at a super shop"),
    "supershop-2": ("Photos/IMG_20260923_121806_164.jpg", "Installing a distribution board at a super shop in Uttara"),
    "supershop-3": ("Photos/IMG_20260923_185234_540.jpg", "Commercial maintenance work in a retail store"),
    "pipe-1": ("Photos/IMG_20251014_134704_034.jpg", "Water pipe and valve connection by our plumber"),
    "commode-1": ("Photos/IMG_20261010_152924_227.jpg", "New commode installed in a bathroom"),
    "commode-2": ("Photos/IMG_20261010_152930_208.jpg", "Commode installation with flush tank fitting"),
    "tap-1": ("Photos/IMG_20261018_221132_107.jpg", "New basin tap installed by our plumber"),
    # Service-labelled photos (one per service)
    "basin-mixer-drip": ("Services/basin-mixer-drip.jpg", "Dripping basin mixer tap that needs repair"),
    "basin-install": ("Services/basin-install.png", "Plumber installing a wash basin and its water lines"),
    "concealed-wiring": ("Services/concealed-wiring.png", "Electrician cutting wall channels for concealed wiring"),
    "door-lock": ("Services/door-lock.jpg", "Technician installing and repairing a door lock"),
    "sink-mixer": ("Services/sink-mixer.png", "Plumber installing a kitchen sink mixer tap"),
    "thai-glass": ("Services/thai-glass.jpg", "Technician repairing a Thai aluminium glass window lock"),
    "washing-machine": ("Services/washing-machine.jpg", "Plumber connecting a washing machine inlet and drain"),
    "commode-blockage": ("Services/commode-blockage.png", "Plumber clearing a commode blockage with a drain machine"),
    "electrical-drawing": ("Services/electrical-drawing.png", "Engineer preparing an electrical drawing for a commercial space"),
    "restaurant-electrical": ("Services/restaurant-electrical.png", "Complete electrical work for a restaurant, discussed with the owner"),
    "electrical-fault": ("Services/electrical-fault.png", "Electrician finding an electrical fault in a DB box with a multimeter"),
    "gas-stove": ("Services/gas-stove.jpg", "Technician installing and repairing a gas stove"),
    "project-visit": ("Services/project-visit.png", "Engineer inspecting a distribution board on a site visit with the client"),
    "panel-shower": ("Services/panel-shower.png", "Plumber installing a shower panel in a bathroom"),
    "tv-wall-mount": ("Services/tv-wall-mount.png", "Technician fitting a TV wall mount bracket"),
    "water-filter": ("Services/water-filter.jpg", "Technician installing a water purifier in a kitchen"),
    "water-heater": ("Services/water-heater.png", "Plumber installing a water heater (geyser) in a bathroom"),
    "ac-indoor": ("Services/ac-indoor.jpg", "Technician installing an AC indoor unit"),
    "ac-outdoor-gas": ("Services/ac-outdoor-gas.jpg", "Technician connecting an AC outdoor unit and refilling gas"),
    "ac-outdoor-wall": ("Services/ac-outdoor-wall.jpg", "Technician fitting an AC outdoor unit on an outside wall"),
}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    meta = {}
    for key, (rel, alt) in PHOTOS.items():
        src = SRC / rel
        if not src.exists():
            print(f"missing: {src}", file=sys.stderr)
            continue
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        w, h = im.size
        made = []
        for target in WIDTHS:
            if target > w and made:
                break
            tw = min(target, w)
            th = round(h * tw / w)
            out = OUT / f"{key}-{tw}.webp"
            if not out.exists():
                im.resize((tw, th), Image.LANCZOS).save(out, "WEBP", quality=72, method=6)  # no exif passed
            made.append(tw)
        old = json.loads(DATA.read_text(encoding="utf-8")) if DATA.exists() else {}
        meta[key] = {"alt": alt, "altBn": old.get(key, {}).get("altBn", ""), "w": w, "h": h, "widths": made}
        print(f"{key}: {made}")

    # Logo + favicons are generated by scripts/make_favicons.py

    DATA.write_text(json.dumps(meta, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"{len(meta)} photos -> {OUT}")


if __name__ == "__main__":
    main()
