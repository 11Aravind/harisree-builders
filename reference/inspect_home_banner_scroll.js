const https = require('https');

const chunkUrl = 'https://www.kenthomes.in/_next/static/chunks/364-b3142d2ee4d46299.js';

https.get(chunkUrl, (res) => {
  let js = '';
  res.on('data', chunk => js += chunk);
  res.on('end', () => {
    // Search for HomeBanner component definition
    const bannerPos = js.indexOf('HomeBanner_parallax___PA5_');
    if (bannerPos !== -1) {
      console.log('\n--- HOME BANNER PARALLAX CODE ---');
      console.log(js.substring(bannerPos - 500, bannerPos + 800));
    }

    // Search for scroll animations or window scroll listeners in HomeBanner
    const scrollPos = js.indexOf('handleScroll');
    if (scrollPos !== -1) {
      console.log('\n--- HANDLE SCROLL CODE ---');
      console.log(js.substring(scrollPos - 200, scrollPos + 1000));
    }
  });
});

