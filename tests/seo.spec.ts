import { test, expect } from '@playwright/test';

test.describe('SEO & Metadata Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page has optimal SEO title targeting Sasthamcotta, Bharanikavu & Kollam', async ({ page }) => {
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title).toContain('Harisree Builders');
    expect(title).toContain('Sasthamcotta');
    expect(title).toContain('Kollam');
  });

  test('Page has localized Meta Description and Keywords', async ({ page }) => {
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description).toContain('Sasthamcotta');
    expect(description).toContain('Bharanikavu');
    expect(description).toContain('96334');

    const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
    expect(keywords).toBeTruthy();
    expect(keywords).toContain('nearest building construction');
    expect(keywords).toContain('Sasthamcotta');
    expect(keywords).toContain('Bharanikavu');
  });

  test('Canonical URL is set to production URL', async ({ page }) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://harisree-builders.vercel.app/');
  });

  test('Geo tags are configured for Kerala location coordinates', async ({ page }) => {
    const geoRegion = await page.locator('meta[name="geo.region"]').getAttribute('content');
    expect(geoRegion).toBe('IN-KL');

    const geoPlacename = await page.locator('meta[name="geo.placename"]').getAttribute('content');
    expect(geoPlacename).toContain('Sasthamcotta');

    const geoPosition = await page.locator('meta[name="geo.position"]').getAttribute('content');
    expect(geoPosition).toContain('9.0436;76.6272');
  });

  test('Open Graph & WhatsApp preview meta tags are present', async ({ page }) => {
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();

    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDesc).toBeTruthy();

    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toContain('logo.png');

    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    expect(ogUrl).toBe('https://harisree-builders.vercel.app/');
  });

  test('LocalBusiness & GeneralContractor JSON-LD Schema is valid and contains correct NAP', async ({ page }) => {
    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(2);

    let foundLocalBusiness = false;
    let foundFAQ = false;

    for (let i = 0; i < count; i++) {
      const content = await jsonLdScripts.nth(i).textContent();
      expect(content).toBeTruthy();
      const parsed = JSON.parse(content || '{}');

      if (parsed['@type'] && (parsed['@type'].includes('LocalBusiness') || parsed['@type'].includes('GeneralContractor'))) {
        foundLocalBusiness = true;
        expect(parsed.name).toBe('Harisree Builders & Interiors');
        expect(parsed.telephone).toBe('+919633479993');
        expect(parsed.email).toBe('hareesreebuilders@gmail.com');
        expect(parsed.address.addressLocality).toBe('Sasthamcotta');
        expect(parsed.address.postalCode).toBe('690520');
        expect(parsed.geo.latitude).toBe(9.0436);
        expect(parsed.areaServed.some((a: { name: string }) => a.name === 'Bharanikavu')).toBe(true);
      }

      if (parsed['@type'] === 'FAQPage') {
        foundFAQ = true;
        expect(parsed.mainEntity.length).toBeGreaterThan(0);
      }
    }

    expect(foundLocalBusiness).toBe(true);
    expect(foundFAQ).toBe(true);
  });

  test('Page contains proper H1 heading hierarchy', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('robots.txt and sitemap.xml are served properly', async ({ page }) => {
    const robotsResponse = await page.goto('/robots.txt');
    expect(robotsResponse?.status()).toBe(200);
    const robotsText = await robotsResponse?.text();
    expect(robotsText).toContain('Sitemap: https://harisree-builders.vercel.app/sitemap.xml');

    const sitemapResponse = await page.goto('/sitemap.xml');
    expect(sitemapResponse?.status()).toBe(200);
    const sitemapText = await sitemapResponse?.text();
    expect(sitemapText).toContain('https://harisree-builders.vercel.app/');
  });
});
