import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');
export class Tickets {
   
    lnkTickets = element(by.xpath('//a[text()="Tickets"]'))

    
    async clickOnTicketPage() {
        await this.lnkTickets.click()
    }
    
    async logOutUser() {
        await browser.sleep(3000)
        await element(by.className("iframe-link a-cursor profile-arrow")).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
        await element(by.xpath('//span[text()="Logout"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
}

}