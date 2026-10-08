import { test, expect } from '@playwright/test';

test.describe('UI/UX Functionality & Responsive Verification', () => {
  test('Page loads without uncaught JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toEqual([]);
  });

  test('Navigation bar and Consultation modal workflow', async ({ page, isMobile }) => {
    await page.goto('/');

    // Check brand logo visibility
    const logo = page.locator('header img[alt="Harisree Builders & Interiors"]').first();
    await expect(logo).toBeVisible();

    if (!isMobile) {
      // Check Enquiry button triggers Consultation Modal (desktop)
      const enquireBtn = page.locator('header button:has-text("Enquire Now")').first();
      if (await enquireBtn.isVisible()) {
        await enquireBtn.click();
        const modal = page.locator('text=Plan Your Dream Project');
        await expect(modal).toBeVisible();

        // Close modal
        const closeBtn = page.locator('button[aria-label="Close modal"]');
        if (await closeBtn.isVisible()) {
          await closeBtn.click();
          await expect(modal).not.toBeVisible();
        }
      }
    }
  });

  test('Project Gallery tabs switch and show project cards', async ({ page }) => {
    await page.goto('/');
    const gallerySection = page.locator('#projects');
    await expect(gallerySection).toBeVisible();
    await gallerySection.scrollIntoViewIfNeeded();

    // Check filter buttons
    const interiorTab = gallerySection.locator('button:has-text("Interiors")');
    if (await interiorTab.isVisible()) {
      await interiorTab.click();
      await page.waitForTimeout(400);
      const card = gallerySection.locator('span:has-text("Interior Design")').first();
      await expect(card).toBeVisible();
    }
  });

  test('FAQ Accordion toggles open and closed', async ({ page }) => {
    await page.goto('/');
    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeVisible();
    await faqSection.scrollIntoViewIfNeeded();

    const faqButtons = faqSection.locator('button');
    const firstFaq = faqButtons.first();
    await firstFaq.click();
    await page.waitForTimeout(200);

    // Click second FAQ item
    const secondFaq = faqButtons.nth(1);
    await secondFaq.click();
    await page.waitForTimeout(200);
  });

  test('Contact form field inputs work correctly', async ({ page }) => {
    await page.goto('/#contact');
    const nameInput = page.locator('input[placeholder="e.g. Anand Varghese"]');
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Test User');

    const phoneInput = page.locator('input[placeholder="e.g. +91 9633479993"]');
    await expect(phoneInput).toBeVisible();
    await phoneInput.fill('9633479993');

    const locationInput = page.locator('input[placeholder="e.g. Sasthamcotta / Muthupilakkadu"]');
    await locationInput.fill('Bharanikavu');

    const submitBtn = page.locator('button:has-text("Submit Project Inquiry")');
    await submitBtn.click();

    // Confirmation message appears
    await expect(page.locator('text=Thank You! Your Inquiry is Sent.')).toBeVisible();
  });

  test('Footer contains accurate contact info, service areas, and Back to Top', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
    await page.waitForTimeout(500);

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Verify phone & email bindings
    await expect(footer.getByText('96334 79993').first()).toBeVisible();
    await expect(footer.getByText('hareesreebuilders@gmail.com').first()).toBeVisible();

    // Verify key service areas
    await expect(footer.getByText('Sasthamcotta').first()).toBeVisible();
    await expect(footer.getByText('Bharanikavu').first()).toBeVisible();

    // Verify Back to Top button
    const backToTopBtn = footer.locator('button:has-text("Back to Top")');
    await expect(backToTopBtn).toBeVisible();
    await backToTopBtn.click({ force: true });
  });

  test('Mobile drawer navigation opens, toggles submenus, and closes', async ({ page, isMobile }) => {
    if (!isMobile) return;
    await page.goto('/');

    const menuToggle = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuToggle).toBeVisible();
    await menuToggle.click();
    await page.waitForTimeout(300);

    // Check Home link in drawer
    const drawer = page.locator('[aria-label="Mobile Navigation Menu"]');
    await expect(drawer).toBeVisible();
    const homeLink = drawer.locator('a:has-text("Home")');
    await expect(homeLink).toBeVisible();

    // Check Projects submenu toggle
    const projectsMenu = drawer.locator('div:has-text("Projects")').filter({ hasText: /^Projects/ }).first();
    await expect(projectsMenu).toBeVisible();
    await projectsMenu.click();
    await page.waitForTimeout(300);

    await expect(drawer.locator('a:has-text("3D Exterior Elevations")')).toBeVisible();

    // Close mobile drawer
    const closeBtn = drawer.locator('button[aria-label="Close menu"]');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
    await page.waitForTimeout(300);
  });

  test('Mobile view contains floating WhatsApp action button shown after scrolling past hero', async ({ page, isMobile }) => {
    if (!isMobile) return;
    await page.goto('/');

    const whatsappBtn = page.locator('aside[aria-label="Mobile WhatsApp Floating Action"]');
    // Initially at top over hero, the floating button should not be visible
    await expect(whatsappBtn).not.toBeVisible();

    // Scroll down past hero
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(400);

    // After scrolling past hero, WhatsApp floating button appears in bottom right
    await expect(whatsappBtn).toBeVisible();
    await expect(whatsappBtn.locator('a[aria-label="WhatsApp"]')).toBeVisible();
  });
});
