import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://www.kenthomes.in/';

function get(u) {
  return new Promise((resolve, reject) => {
    https.get(u, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location.startsWith('http') ? res.headers.location : 'https://www.kenthomes.in' + res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching homepage from', url);
  const html = await get(url);
  console.log('HTML length:', html.length);
  fs.writeFileSync('reference/kent_home.html', html);

  // Extract styles / CSS links
  const cssRegex = /href="([^"]+\.css[^"]*)"/g;
  let match;
  const cssUrls = new Set();
  while ((match = cssRegex.exec(html)) !== null) {
    let cssUrl = match[1];
    if (!cssUrl.startsWith('http')) {
      cssUrl = 'https://www.kenthomes.in' + (cssUrl.startsWith('/') ? '' : '/') + cssUrl;
    }
    cssUrls.add(cssUrl);
  }

  console.log('Found CSS URLs:', Array.from(cssUrls));

  let combinedCss = '';
  for (const cssUrl of cssUrls) {
    console.log('Fetching CSS:', cssUrl);
    try {
      const css = await get(cssUrl);
      combinedCss += `\n/* Source: ${cssUrl} */\n` + css;
    } catch (e) {
      console.error('Failed to fetch', cssUrl, e.message);
    }
  }

  fs.writeFileSync('reference/kent_combined.css', combinedCss);

  // Extract script tags
  const jsRegex = /src="([^"]+\.js[^"]*)"/g;
  const jsUrls = new Set();
  while ((match = jsRegex.exec(html)) !== null) {
    let jsUrl = match[1];
    if (!jsUrl.startsWith('http')) {
      jsUrl = 'https://www.kenthomes.in' + (jsUrl.startsWith('/') ? '' : '/') + jsUrl;
    }
    jsUrls.add(jsUrl);
  }
  console.log('Found JS URLs:', Array.from(jsUrls));

  let combinedJs = '';
  for (const jsUrl of jsUrls) {
    console.log('Fetching JS:', jsUrl);
    try {
      const js = await get(jsUrl);
      combinedJs += `\n/* Source: ${jsUrl} */\n` + js;
    } catch (e) {
      console.error('Failed to fetch JS', jsUrl, e.message);
    }
  }
  fs.writeFileSync('reference/kent_combined.js', combinedJs);

  console.log('Done fetching all Kent Homes reference assets!');
}

main().catch(console.error);
