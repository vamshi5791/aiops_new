import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var drp = new support(); 
var expect = chai.expect;
export class Dashboard {
    btnDashboard = element(by.xpath('//a[text()="Dashboard"]'));
    btnSeverity = element(by.xpath('//span[text()="All"]'));
    txtSource = element(by.xpath('//label[text()="Source"]//following::input[@type="text"]'));
    async clickOnDashboard() {
        await this.btnDashboard.click()
    }
    async clickOnSeverity(Severity: string) {
        await this.btnSeverity.click()
        await drp.selectByVisibleText(Severity)
    }
    async clickOnSource(Source: string) {
        await this.txtSource.sendKeys(Source)
    }
    async getCountFromDashBoard() {
        await element(by.xpath('//div[text()="1iam network - bgp neighbor down - critical"]//following::td')).getText().then(async function (text) {
              console.log(text)
             
            });
      }
};