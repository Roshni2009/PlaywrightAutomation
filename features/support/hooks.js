const { Before, After, BeforeStep, AfterStep, Status, AfterAll } =require("@cucumber/cucumber");
const { LoginPage } = require('../../pageObjects/LoginPage')
const { PageLogin } = require('../../pageObjects/PageLogin')
const playwright = require("@playwright/test");



Before(async function() {
    const browser = await playwright.chromium.launch({ headless: false });
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    // await browser.clearCookies();
    // await browser.clearCache();
    this.loginPage = new LoginPage(this.page);
    this.pageLogin = new PageLogin(this.page);
});

After(async function () {
    console.log("Execution Completed Successfully");
    
});

// AfterAll(async function({browser}) {
//     await browser.close();
// });

BeforeStep(function(){

});

AfterStep( async function ({result}) {
    if (result.status === Status.FAILED) {
      await this.page.screenshot({path:'screenshots/screenshot4.png'});
    }
  });