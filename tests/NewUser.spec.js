const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");
const testData = JSON.parse(
  JSON.stringify(require("../utils/createUser_testData.json"))
);

//test.describe.configure({ mode: "parallel" });
//test.describe.configure({ mode: "serial" });
for (const data of testData) {
  test(`The New User created is ${data.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    loginPage.validLogin(data.userName, data.password);
    const workarea = page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByTitle("Frame for system use");
    const title = page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Browser Tree");
    const menu = page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Menu Bar");
    const area = page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area");
    await page.waitForLoadState("networkidle");
    await title.contentFrame().locator("#docbrowser14").click();
    await area.contentFrame().getByRole("link", { name: "Users" }).click();
    await page.waitForLoadState("networkidle");
    await menu.contentFrame().getByText("File").click();
    await area.contentFrame().getByText("New").click();
    await area
      .contentFrame()
      .locator("#MenuBar_file_new_menu_0_submenu")
      .click();
    await area.contentFrame().getByText("User", { exact: true }).click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .fill(data.name);
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Login Name" })
      .click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Login Name" })
      .fill(data.loginName);
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "User Email Address" })
      .click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "User Email Address" })
      .fill(data.email);
    await workarea
      .first()
      .contentFrame()
      .locator('select[name="userattributes_contents_userource_0"]')
      .selectOption("inline password");
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Password", exact: true })
      .click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Password", exact: true })
      .fill(data.userPassword);
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Confirm Password" })
      .click();
    await workarea
      .first()
      .contentFrame()
      .getByRole("textbox", { name: "Confirm Password" })
      .fill(data.userPassword);
    await workarea
      .first()
      .contentFrame()
      .locator('select[name="userattributes_contents_userprivilegeslist_0"]')
      .selectOption("16");
    await workarea
      .first()
      .contentFrame()
      .locator('select[name="userattributes_contents_clientcapabilitylist_0"]')
      .selectOption("8");
    await workarea
      .first()
      .contentFrame()
      .getByRole("button", { name: "OK" })
      .click();
  });

  test(`@UI The Searched User is ${data.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    loginPage.validLogin(data.userName, data.password);
    await page.waitForLoadState("networkidle");
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Browser Tree")
      .contentFrame()
      .locator("#docbrowser14")
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("link", { name: "Users" })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .fill(data.name);
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("button", { name: "Search" })
      .click();
  });

  test(`The Deleted User is ${data.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    loginPage.validLogin(data.userName, data.password);
    await page.waitForLoadState("networkidle");
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Browser Tree")
      .contentFrame()
      .locator("#docbrowser14")
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("link", { name: "Users" })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("textbox", { name: "User Name" })
      .fill(data.name);
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByRole("button", { name: "Search" })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByText(data.name, { exact: true })
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByText(data.name, { exact: true })
      .click({
        button: "right",
      });
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByText("Delete")
      .click();
    await page
      .getByTitle("yyMSG_CLASSICVIEWyy")
      .contentFrame()
      .getByTitle("Workarea")
      .contentFrame()
      .getByTitle("Content Area")
      .contentFrame()
      .getByTitle("Frame for system use")
      .first()
      .contentFrame()
      .getByRole("button", { name: "OK" })
      .click();
  });
}
