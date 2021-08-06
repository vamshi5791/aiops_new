import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class LogIn {
    txtUserName = element(by.name("username"))
    txtPassword = element(by.name("password"))
    btnClickOnSignIn = element(by.xpath('//input[@name="login"]'))

    async LogIn_Details(UserName: string, Password: string) {
        await this.txtUserName.sendKeys(UserName)
        await this.txtPassword.sendKeys(Password)
        await this.btnClickOnSignIn.click();
    }
    async enterUserName(UserName: string) {
        await this.txtUserName.sendKeys(UserName)
       
    }
    async enterPassword(Password: string) {
       
        await this.txtPassword.sendKeys(Password)
       
    }
    async clickOnLogInButton() {

        await this.btnClickOnSignIn.click();
    }
    async logOutUser() {
        await browser.sleep(3000)
        await element(by.className("iframe-link a-cursor profile-arrow")).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
        await element(by.xpath('//span[text()="Logout"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
}

}
