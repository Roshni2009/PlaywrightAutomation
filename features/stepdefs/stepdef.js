const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {PageLogin} = require('../../pageObjects/PageLogin');


Given('I login to the SmartView UI as {string} and {string}',{timeout:150*1000}, async function (loginName,password) {
    await this.pageLogin.d2goTo();
    await this.pageLogin.validLogin(loginName, password);
});

When('I upload a file using Upload file button',{timeout:150*1000}, async function () {
    try{
        await this.page.getByRole('menuitem', { name: 'Shortcut to Upload file' }).locator('a').click();
        await this.page.getByRole('button', { name: 'Upload files' }).click();
        const filePath = 'C:/Users/rdk/Documents/Trainings/Selenium_Codes/Alerts.txt';
        const fileInput = await this.page.$('input[type="file"]');
        await fileInput.setInputFiles(filePath);
        await this.page.getByLabel('Continue').click();
        await this.page.getByLabel('Transmittal Category').click();
        await this.page.locator('#comboOptionsContainer5706').getByTitle('Project Transmittal', { exact: true }).click();
        await this.page.getByLabel('Continue').click();
        await this.page.getByRole('tab', { name: 'Properties' }).click();
        await this.page.getByLabel('Continue').click();
        await this.page.waitForTimeout(2000);
        //await this.page.waitForLoadState("networkidle");
        await this.page.getByLabel('Continue').click();
        //await this.page.getByLabel('Continue').click();
        // const message = await page.getByRole('heading', { name: 'Uploading "Auto_Suggestions.' }).click();
        // console.log('Message:', message);
    } catch (error) {
        console.error('Error during file upload:', error);
      }
  });

  Then('I should see the file uploaded successfully',{timeout:150*1000}, async function () {
    const message =await this.page.getByRole('heading', { name: 'Uploading "Alerts.txt"' },{waitUntil : 'load'});
    await message.waitFor({ state: 'visible', timeout: 5000 });
    const successMessage = await message.textContent();
    console.log('Message:', successMessage);
    await this.page.waitForLoadState("networkidle");
    await this.page.getByRole('button', { name: 'Go to overview' }).click();
    const screenshotPath = 'screenshots/upload_success.png';
    await this.page.screenshot({ path: screenshotPath });
    console.log('Screenshot taken:', screenshotPath);
  });

  Then('I download the uploaded file',{timeout:150*1000}, async function () {
    await this.page.goto('https://addon-dctm-ingress.ao-dev.cfcr-lab.bp-paas.otxlab.net/D2-Smartview/ui/#d2/nodes/0901e2408000913e');
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;
  });