import fs from 'fs';

const html = fs.readFileSync('reference/kent_home.html', 'utf-8');
const css = fs.readFileSync('reference/kent_combined.css', 'utf-8');

console.log('--- ALL FONTS IN HTML ---');
const fontLinks = html.match(/<link[^>]+fonts[^>]+>/gi) || [];
fontLinks.forEach(f => console.log(f));

const fontStyles = html.match(/font-family:[^;}"']+/gi) || [];
console.log('Inline font styles in HTML:', [...new Set(fontStyles)]);

console.log('\n--- ALL FONT FAMILIES IN CSS ---');
const cssFontFamilies = css.match(/font-family:[^;}]+/gi) || [];
console.log([...new Set(cssFontFamilies)]);

console.log('\n--- FONT IMPORTS & FONT FACES ---');
const fontImports = css.match(/@import[^;]+font[^;]+;/gi) || [];
console.log('Imports:', fontImports);

const fontFaces = css.match(/@font-face\s*\{[^}]+\}/gi) || [];
fontFaces.forEach(ff => console.log(ff));

// Search for body, h1, h2, h3, hero typography rules
console.log('\n--- TYPOGRAPHY RULES ---');
const headings = css.match(/(?:h1|h2|h3|body|\.HomeBanner|\.LandingBanner)[^{]*\{[^}]*font-[^}]*\}/gi) || [];
headings.slice(0, 30).forEach(h => console.log(h));
