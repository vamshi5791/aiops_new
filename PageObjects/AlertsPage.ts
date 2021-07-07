import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class AlertsPage {

    btnselectAlerts=element(by.xpath('//a[text()="Alerts"]'))

    async selectAlerts() { 
        await this.btnselectAlerts.click();
      }


}