// @ts-check
const { devices } = require("@playwright/test");
const { trace } = require("console");
const { permission } = require("process");
const { defineConfig } = require('@playwright/test');

const config = {
  testDir: "./tests",
  retries: 2, //to run the failed test cases
  // workers: 1, //parallel execution of files from test folder
  timeout: 80 * 1000,
  expect: {
    timeout: 80000,
  },

  reporter: "html",
  use: {
    browserName: "chromium",
    headless: true,
    viewport: { width: 1920, height: 1080 },
    screenshot: "on",
    igonreHttpsErrors: true, // to ignore the SSL error
    permissions: ["geolocation"], //to provide location permission
    trace: "retain-on-failure",
    video: "retain-on-failure",
    //...devices["Pixel 7"],
  },
};

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://dctm-ingress-ao.ce-shared.bp.anthos.otxlab.net/dctm-rest',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});

module.exports = config;
