import re
import json

file_path = r"C:\Users\USER\.gemini\antigravity-ide\brain\0ceb0d5e-d6bf-4987-96ef-a27080257bc8\.system_generated\steps\7\content.md"

with open(file_path, 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Total HTML Length: {len(html)}")

# Find all CSS link tags
css_links = re.findall(r'<link[^>]+>', html)
print("\n--- LINK TAGS ---")
for link in css_links:
    print(link)

# Find scripts
scripts = re.findall(r'<script[^>]*src="([^"]+)"', html)
print("\n--- SCRIPTS ---")
for s in scripts:
    print(s)

# Find inline styles
inline_styles = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)
print(f"\nFound {len(inline_styles)} inline <style> tags")
for i, s in enumerate(inline_styles):
    print(f"\n--- STYLE TAG {i+1} (first 500 chars) ---")
    print(s[:500])
    # Search for font-family
    font_families = re.findall(r'font-family:[^;}]+', s, re.IGNORECASE)
    if font_families:
        print("  Font families in style:", set(font_families))
    # Search for colors
    colors = re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b|rgba?\([^)]+\)', s)
    if colors:
        print("  Colors in style:", set(colors[:20]))

# Look for NEXT.js data / JSON state if any
next_data = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html)
if next_data:
    print("\n--- NEXT DATA FOUND ---")
    data_str = next_data.group(1)
    print("Next data length:", len(data_str))

# Look for Hero section HTML markup
hero_match = re.search(r'(<[^>]+(?:hero|banner|scroll|slider)[^>]*>.*?</div[^>]*>)', html, re.IGNORECASE | re.DOTALL)
if hero_match:
    print("\n--- HERO SECTION SAMPLE ---")
    print(hero_match.group(1)[:1000])

# Search for GSAP, ScrollTrigger, Locomotive, Swiper, AOS, Framer
libraries = ['gsap', 'scrolltrigger', 'swiper', 'locomotive', 'aos', 'framer', 'slick', 'owl', 'fullpage', 'lenis']
print("\n--- DETECTED LIBRARIES ---")
for lib in libraries:
    matches = re.findall(rf'{lib}', html, re.IGNORECASE)
    print(f"Library '{lib}': {len(matches)} occurrences")

