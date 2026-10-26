"""Generate the full favicon set from ../Pictures/logo/Logo.png into public/.

Outputs: favicon.ico (16/32/48), favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png (180),
android-chrome-192x192.png, android-chrome-512x512.png, maskable-512x512.png, logo.png, logo-160.webp.
The web manifest itself is generated per site by src/pages/site.webmanifest.ts.

Run:  python -I scripts/make_favicons.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "Pictures" / "logo" / "Logo.png"
PUB = ROOT / "public"


def trimmed() -> Image.Image:
    im = Image.open(SRC).convert("RGBA")
    # Make near-white background transparent, then crop to the artwork.
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if r > 245 and g > 245 and b > 245:
                px[x, y] = (255, 255, 255, 0)
    return im.crop(im.getbbox())


def square(art: Image.Image, size: int, pad: float, bg=None) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg or (255, 255, 255, 0))
    inner = max(1, round(size * (1 - 2 * pad)))
    a = art.copy()
    a.thumbnail((inner, inner), Image.LANCZOS)
    canvas.paste(a, ((size - a.width) // 2, (size - a.height) // 2), a)
    return canvas


def main() -> None:
    art = trimmed()
    white = (255, 255, 255, 255)
    # Browser tab icons: transparent, tight padding so the mark stays readable at 16px.
    square(art, 16, 0.0).save(PUB / "favicon-16x16.png", optimize=True)
    square(art, 32, 0.02).save(PUB / "favicon-32x32.png", optimize=True)
    ico = square(art, 256, 0.02)
    ico.save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    # Home-screen icons: white background with breathing room.
    square(art, 180, 0.10, white).convert("RGB").save(PUB / "apple-touch-icon.png", optimize=True)
    square(art, 192, 0.10, white).save(PUB / "android-chrome-192x192.png", optimize=True)
    square(art, 512, 0.10, white).save(PUB / "android-chrome-512x512.png", optimize=True)
    square(art, 512, 0.20, white).save(PUB / "maskable-512x512.png", optimize=True)  # safe zone for Android masks
    # Logos used in the header and structured data.
    square(art, 512, 0.0).save(PUB / "logo.png", optimize=True)
    lg = art.copy(); lg.thumbnail((160, 160), Image.LANCZOS); lg.save(PUB / "logo-160.webp", "WEBP", quality=88)
    for old in ["favicon.png", "icon-192.png"]:
        (PUB / old).unlink(missing_ok=True)
    print("favicons written to", PUB)


if __name__ == "__main__":
    main()
