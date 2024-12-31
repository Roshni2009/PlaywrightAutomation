class PageLogin {

    constructor(page) {
      this.page = page;
      this.userName = page.getByPlaceholder('User name');
      this.password = page.getByPlaceholder('Password');
      this.signInbutton = page.getByRole('button', { name: 'Sign in' });
    }
  
  async d2goTo() {
    await this.page.goto('https://addon-dctm-ingress.ao-dev.cfcr-lab.bp-paas.otxlab.net/D2-Smartview/ui/', { waitUntil: 'load'});
    // await page.tracing.start({ screenshots: true, snapshots: true });
    // await page.tracing.stop({ path: 'trace.zip' });
}
  
   async validLogin(userName,password)
    {
      await this.userName.fill(userName);
      await this.password.fill(password);
      await this.signInbutton.click();
      await this.page.waitForLoadState("networkidle");
  
    }
  }
  module.exports = {PageLogin};