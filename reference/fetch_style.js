const https = require('https');
const fs = require('fs');

const cssFiles = [
    'https://www.kenthomes.in/_next/static/css/e19f0d2e19025da8.css',
    'https://www.kenthomes.in/_next/static/css/01ceeb8859fa4711.css',
    'https://www.kenthomes.in/_next/static/css/3479eebc92ed8fd7.css',
    'https://www.kenthomes.in/_next/static/css/f6b5cf9d55a0eb2a.css'
];

async function fetchCss(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    for (let i = 0; i < cssFiles.length; i++) {
        const url = cssFiles[i];
        console.log(`\nFetching CSS ${i + 1}: ${url}`);
        try {
            const css = await fetchCss(url);
            console.log(`Length: ${css.length} chars`);

            // Find font-family declarations
            const fonts = css.match(/font-family:[^;}]+/gi);
            if (fonts) {
                console.log('  Font families:', [...new Set(fonts)]);
            }

            // Find font-face
            const fontFaces = css.match(/@font-face\s*\{[^}]+\}/gi);
            if (fontFaces) {
                console.log('  @font-face count:', fontFaces.length);
                fontFaces.forEach(ff => console.log('    ', ff.substring(0, 150)));
            }

            // Find key color hex codes / root variables
            const hexColors = css.match(/#(?:[0-9a-fA-F]{3}){1,2}\b/g);
            if (hexColors) {
                const counts = {};
                hexColors.forEach(c => counts[c.toLowerCase()] = (counts[c.toLowerCase()] || 0) + 1);
                const sortedColors = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 15);
                console.log('  Top Hex Colors:', sortedColors);
            }

            // Find keyframes / animations
            const keyframes = css.match(/@keyframes\s+([a-zA-Z0-9_-]+)/gi);
            if (keyframes) {
                console.log('  Keyframes animations:', [...new Set(keyframes)]);
            }

            // Search hero/banner classes
            const heroClasses = css.match(/\.[a-zA-Z0-9_-]*(?:hero|banner|scroll|parallax|slider|video)[a-zA-Z0-9_-]*/gi);
            if (heroClasses) {
                console.log('  Hero/Banner/Scroll classes:', [...new Set(heroClasses)].slice(0, 20));
            }

        } catch (err) {
            console.error(`Error fetching ${url}:`, err.message);
        }
    }
}

run();

