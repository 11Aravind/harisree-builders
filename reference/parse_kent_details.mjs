import fs from 'fs';

const html = fs.readFileSync('reference/kent_home.html', 'utf-8');
const css = fs.readFileSync('reference/kent_combined.css', 'utf-8');
const js = fs.readFileSync('reference/kent_combined.js', 'utf-8');

console.log('--- FONTS & TYPOGRAPHY IN KENT HOMES ---');
// Extract google fonts links or font face rules
const googleFontMatches = html.match(/https:\/\/fonts\.googleapis\.com\/css2?[^"']+/g) || [];
console.log('Google Fonts Links:', [...new Set(googleFontMatches)]);

const fontFamilies = css.match(/font-family:[^;}]+/gi) || [];
console.log('Font Families in CSS:', [...new Set(fontFamilies)]);

const fontFaceMatches = css.match(/@font-face\s*\{[^}]+\}/gi) || [];
console.log('@font-face Rules count:', fontFaceMatches.length);
fontFaceMatches.forEach((ff, i) => console.log(`Font-Face ${i + 1}:`, ff));

// Extract CSS Variables (colors, spacing, typography)
console.log('\n--- CSS VARIABLES ---');
const cssVars = css.match(/--[a-zA-Z0-9_-]+:\s*[^;}]+/g) || [];
console.log('Variables:', [...new Set(cssVars)]);

// Color palette analysis
const hexColors = css.match(/#(?:[0-9a-fA-F]{3}){1,2}\b/g) || [];
const colorCounts = {};
hexColors.forEach(c => {
  const norm = c.toLowerCase();
  colorCounts[norm] = (colorCounts[norm] || 0) + 1;
});
const topColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
console.log('\n--- TOP COLOR PALETTE ---', topColors);

// Extract Hero / Banner Section from HTML / NEXT_DATA
console.log('\n--- HERO / BANNER SECTION IN HTML ---');
const heroHtmlMatch = html.match(/<section[^>]*class="[^"]*(?:hero|banner|LandingBanner)[^"]*"[^>]*>[\s\S]*?<\/section>/gi) ||
                      html.match(/<div[^>]*class="[^"]*(?:hero|banner|LandingBanner)[^"]*"[^>]*>[\s\S]*?<\/div>/gi);

if (heroHtmlMatch) {
  console.log('Hero HTML snippet length:', heroHtmlMatch[0].length);
  console.log(heroHtmlMatch[0].substring(0, 2000));
}

// Next data hero/banner content
const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
if (nextDataMatch) {
  try {
    const nextData = JSON.parse(nextDataMatch[1]);
    console.log('\n--- NEXT_DATA HERO/BANNER PROPS ---');
    const pageProps = nextData.props.pageProps;
    if (pageProps) {
      console.log('PageProps keys:', Object.keys(pageProps));
      if (pageProps.banner || pageProps.homeBanner || pageProps.banners || pageProps.hero) {
        console.log('Banner data:', JSON.stringify(pageProps.banner || pageProps.homeBanner || pageProps.banners || pageProps.hero, null, 2));
      } else {
        // Search deep in pageProps
        console.log('Sample pageProps json snippet:', JSON.stringify(pageProps).substring(0, 3000));
      }
    }
  } catch (e) {
    console.error('Error parsing next data:', e.message);
  }
}

// Search CSS rules for LandingBanner or HomeBanner
console.log('\n--- HERO BANNER CSS STYLES ---');
const bannerCssRegex = /\.(?:LandingBanner|HomeBanner|hero|banner)_[a-zA-Z0-9_-]+\s*\{[^}]+\}/gi;
let bMatch;
while ((bMatch = bannerCssRegex.exec(css)) !== null) {
  console.log(bMatch[0]);
}

