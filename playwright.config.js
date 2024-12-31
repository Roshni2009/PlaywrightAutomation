// @ts-check
const { devices } = require("@playwright/test");
const { trace } = require("console");
const { permission } = require("process");

const config = {
  testDir: "./tests",
  retries: 2, //to run the failed test cases
  // workers: 1, //parallel execution of files from test folder
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
    viewport: { width: 1920, height: 1080 },
    screenshot: "on",
    igonreHttpsErrors: true, // to ignore the SSL error
    permissions: ["geolocation"], //to provide location permission
    trace: "retain-on-failure",
    video: "retain-on-failure",
    //...devices["Pixel 7"],
  },
};

module.exports = config;
