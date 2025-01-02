const { test, expect } = require("@playwright/test");

test("DA UI Login Page Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://10.194.52.76:8080/da244b25/component/main");

  const logo = page.locator("[id='logo']");
  const username = page.locator("[name*='username']");
  const password = page.locator("[type='password']");
  const repository = page.locator("[id='DocbaseName']");
  const login = page.locator("[class='button default']");

  console.log(logo.textContent());
  await username.type("Administrator");
  await password.type("Password@123");
  await repository.selectOption("docbase141");
  await login.click();
});
