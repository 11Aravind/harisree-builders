const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '.system_generated', 'steps', '7', 'content.md');
const html = fs.readFileSync(filePath, 'utf-8');

console.log(`Total HTML Length: ${html.length}`);

// Extract all script tags
const scriptSrcs = [];
const scriptRegex = /<script[^>]*src=["']([^"']+)["']/g;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  scriptSrcs.push(match[1]);
}
console.log('\n--- SCRIPT SOURCES ---');
console.log(scriptSrcs);

// Extract link tags
const linkTags = [];
const linkRegex = /<link[^>]+>/g;
while ((match = linkRegex.exec(html)) !== null) {
  linkTags.push(match[0]);
}
console.log('\n--- LINK TAGS ---');
linkTags.forEach(l => console.log(l));

// Extract inline styles
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let styleCount = 0;
while ((match = styleRegex.exec(html)) !== null) {
  styleCount++;
  const styleContent = match[1];
  console.log(`\n--- STYLE TAG ${styleCount} (${styleContent.length} chars) ---`);
  
  // Look for font-family
  const fontMatches = styleContent.match(/font-family:[^;}]+/gi);
  if (fontMatches) {
    console.log('Font Families:', [...new Set(fontMatches)]);
  }

  // Look for font imports
  const fontImports = styleContent.match(/@import[^;]+font[^;]+;/gi) || styleContent.match(/@font-face\s*\{[^}]+\}/gi);
  if (fontImports) {
    console.log('Font Imports / @font-face:', fontImports.slice(0, 10));
  }

  // Look for key color hex codes and CSS variables
  const cssVars = styleContent.match(/--[a-zA-Z0-9_-]+:\s*[^;}]+/g);
  if (cssVars) {
    console.log('CSS Variables:', [...new Set(cssVars)].slice(0, 30));
  }
}

// Search for scroll & animation keywords in HTML
const animationKeywords = ['gsap', 'scrolltrigger', 'swiper', 'locomotive', 'aos', 'framer', 'parallax', 'sticky', 'transform', 'scale', 'opacity'];
console.log('\n--- ANIMATION KEYWORD SEARCH ---');
animationKeywords.forEach(kw => {
  const reg = new RegExp(kw, 'gi');
  const occurrences = (html.match(reg) || []).length;
  console.log(`Keyword '${kw}': ${occurrences} occurrences`);
});

// Check Next.js __NEXT_DATA__
const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
if (nextDataMatch) {
  console.log('\n--- __NEXT_DATA__ FOUND ---');
  try {
    const nextData = JSON.parse(nextDataMatch[1]);
    console.log('Page Props keys:', Object.keys(nextData.props.pageProps || {}));
    if (nextData.props.pageProps) {
      console.log('Sample Page Props:', JSON.stringify(nextData.props.pageProps).substring(0, 1500));
    }
  } catch (e) {
    console.log('Error parsing __NEXT_DATA__:', e.message);
  }
}

