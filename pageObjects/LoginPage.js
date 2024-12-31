class LoginPage {

  constructor(page) {
    this.page = page;
    this.userName = page.getByRole("textbox", { name: "Login Name" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.signInbutton = page.getByRole("button", { name: "Login" });
  }

  async goTo() {
    await this.page.goto('http://10.194.52.76:8080/da244b25/component/main', { waitUntil: 'load'});
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
module.exports = {LoginPage};