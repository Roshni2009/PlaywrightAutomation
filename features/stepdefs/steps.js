const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require('../../pageObjects/LoginPage')
const playwright = require("@playwright/test");

Given('Login to the DA UI with {string} and {string}', {timeout:150*1000},async function (loginName, password) {
    // const browser = await playwright.chromium.launch({ headless: false });
    // this.context = await browser.newContext();
    // this.page = await this.context.newPage();
    // const loginPage = new LoginPage(this.page);
    await this.loginPage.goTo();
    await this.loginPage.validLogin(loginName, password);
  }
);

When("creating a user {string} and {string} and {string} in the new user page",async function (userName, email, userPassword) {
    await this.page.waitForLoadState("networkidle");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Browser Tree").contentFrame().locator("#docbrowser14").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("link", { name: "Users" }).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Menu Bar").contentFrame().getByText("File").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText("New").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().locator("#MenuBar_file_new_menu_0_submenu").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText("User", { exact: true }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "User Name" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "User Name" }).fill(userName);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Login Name" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Login Name" }).fill(userName);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "User Email Address" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "User Email Address" }).fill(email);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().locator('select[name="userattributes_contents_userource_0"]').selectOption("inline password");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Password", exact: true }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Password", exact: true }).fill(userPassword);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Confirm Password" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("textbox", { name: "Confirm Password" }).fill(userPassword);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().locator('select[name="userattributes_contents_userprivilegeslist_0"]').selectOption("16");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().locator('select[name="userattributes_contents_clientcapabilitylist_0"]').selectOption("8");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("button", { name: "OK" }) .click();
});

Then("search for the new user {string}", async function (userName) {
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).fill(userName);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("button", { name: "Search" }).click();
});

Then("verify the user {string} gets created in the repository", async function (userName) {
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText(userName, { exact: true }).click();
    await this.page.screenshot({ path: 'screenshots/screenshot.png'});
});

Then("search for the user {string}", async function (userName) {
    await this.page.waitForLoadState("networkidle");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Browser Tree").contentFrame().locator("#docbrowser14").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("link", { name: "Users" }).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).fill(userName);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("button", { name: "Search" }).click();
});

Then("verify the user {string} is present in the repository", async function (userName) {
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText(userName, { exact: true }).click();
    await this.page.screenshot({ path: 'screenshots/screenshot1.png'});
});

When('deletes the user {string}', async function (userName) {
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText(userName, { exact: true }).click({button: "right"});
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByText("Delete").click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByTitle("Frame for system use").first().contentFrame().getByRole("button", { name: "OK" }).click();
});

Then('verify the user {string} is not present in the repository', async function (userName) {
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).click();
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("textbox", { name: "User Name" }).fill(userName);
    await this.page.getByTitle("yyMSG_CLASSICVIEWyy").contentFrame().getByTitle("Workarea").contentFrame().getByTitle("Content Area").contentFrame().getByRole("button", { name: "Search" }).click();
   // await this.page.pause();
    await this.page.screenshot({ path: 'screenshots/screenshot2.png'});
});