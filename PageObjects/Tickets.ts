import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');
export class Tickets {

    lnkTickets = element(by.xpath('//a[text()="Tickets"]'))


    async clickOnTicketPage() {
        await this.lnkTickets.click()
    }
    async verifyingTicketConsoleTitles(TicketID, Title, Priority, Description) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + TicketID + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Title + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Priority + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Description + '" ]'))), 10000);
    }

    async verifyingTicketConsole(CreatedTimeAndDate, UpdatdedTimeAndDate, Category, State) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + CreatedTimeAndDate + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + UpdatdedTimeAndDate + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Category + '" ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + State + '" ]'))), 10000);
    }

}