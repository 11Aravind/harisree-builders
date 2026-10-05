const https = require('https');

const chunkUrl = 'https://www.kenthomes.in/_next/static/chunks/364-b3142d2ee4d46299.js';

https.get(chunkUrl, (res) => {
    let js = '';
    res.on('data', chunk => js += chunk);
    res.on('end', () => {
        console.log('JS Loaded:', js.length);

        // Search for HomeBanner component source code snippets
        const homeBannerIndex = js.indexOf('HomeBanner');
        if (homeBannerIndex !== -1) {
            console.log('\n--- HOME BANNER JS SNIPPET ---');
            console.log(js.substring(homeBannerIndex - 200, homeBannerIndex + 1500));
        }

        // Search for Parallax / Swiper options in HomeBanner
        const swiperMatches = js.match(/Swiper[^}]+\}/g);
        if (swiperMatches) {
            console.log('\n--- SWIPER MATCHES ---');
            swiperMatches.forEach(m => console.log(m.substring(0, 300)));
        }

        // Search for scroll zoom / translate / opacity / parallax handlers
        const scrollHandlerMatches = js.match(/handleScroll[^{]+\{(?:[^{}]+|\{[^{}]*\})*\}/g);
        if (scrollHandlerMatches) {
            console.log('\n--- SCROLL HANDLER MATCHES ---');
            scrollHandlerMatches.forEach(m => console.log(m.substring(0, 500)));
        }
    });
});

