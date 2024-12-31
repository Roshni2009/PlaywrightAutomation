import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://addon-dctm-ingress.ao-dev.cfcr-lab.bp-paas.otxlab.net/D2-Smartview/ui/');
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('coordinator');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Password@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('menuitem', { name: 'Shortcut to Document list' }).locator('a').click();
  await page.goto('https://addon-dctm-ingress.ao-dev.cfcr-lab.bp-paas.otxlab.net/D2-Smartview/ui/#d2/nodes/repository?order_by=ao_document.document_type_asc');
  await page.getByRole('cell', { name: 'addon Selection. When' }).locator('span').first().click();
  await page.getByLabel('Projects Library', { exact: true }).click();
  await page.getByLabel('Project Templates', { exact: true }).click();
});