const https = require('https');

const cssUrl = 'https://www.kenthomes.in/_next/static/css/3479eebc92ed8fd7.css';

https.get(cssUrl, (res) => {
    let css = '';
    res.on('data', chunk => css += chunk);
    res.on('end', () => {
        console.log('CSS Loaded:', css.length);

        // Find LandingBanner CSS rules
        const landingBannerRegex = /\.LandingBanner_[a-zA-Z0-9_-]+\s*\{[^}]+\}/g;
        let match;
        console.log('\n--- LANDING BANNER CSS RULES ---');
        while ((match = landingBannerRegex.exec(css)) !== null) {
            console.log(match[0]);
        }

        // Find LandingBanner keyframes
        const keyframesRegex = /@keyframes\s+LandingBanner_slideAnimation[^{]+\{(?:[^{}]+|\{[^{}]*\})*\}/g;
        console.log('\n--- LANDING BANNER KEYFRAMES ---');
        while ((match = keyframesRegex.exec(css)) !== null) {
            console.log(match[0]);
        }

        // Find any parallax / video / clip-path / transform rules in LandingBanner
        const allBannerMatches = css.match(/LandingBanner_[a-zA-Z0-9_-]+/g);
        console.log('\n--- ALL LANDING BANNER CLASS NAMES ---');
        console.log([...new Set(allBannerMatches)]);
    });
});

