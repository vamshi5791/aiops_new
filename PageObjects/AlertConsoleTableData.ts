import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var drp = new support();
var expect = chai.expect;
var EC = browser.ExpectedConditions;
var moment = require("moment");
var fse = require("fs-extra");

export class AlertConsoleTableData {

    nextArrayButton = element(by.xpath('//a[@class="smo-paginator-next smo-paginator-element smo-state-default smo-corner-all smo-paginator-next-ms"]'))


    rowCount = 0;
    columnCount = 0;

    async extractTableData() {
        this.rowCount = 0;
        this.columnCount = 0;
        await browser.sleep(500);
        let jsonArrayObject: any = [];

        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr[1]/td[@class="alert-table-text medium-column align-padding ng-star-inserted"]')).count().then(async (count) => {
            return this.columnCount = count;
        });

        await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " this.columnCount: " + this.columnCount);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " this.rowCount: " + count);
            for (let i = 1; i <= count; i++) {
                var rowData = {};
                for (let j = 2; j <= 14; j++) {
                    await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[' + j + ']')).getText().then(async function (cellValue) {
                        return rowData[j] = cellValue;

                    });
                }
                jsonArrayObject.push(rowData);

            };

        });
        return jsonArrayObject;
    }

    async isElementIsDisplayed() {
        try {
            return await this.nextArrayButton.isPresent().then(async function (select) {
                console.log("select: " + select);
                await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " select: " + select);
                return select;
            });
        }
        catch (error) {
            console.log("Feature name :Login persona and Scenario name : unable to click create new project")
            console.log(error)
            return false;
        }
        return false;
    }


    //get count 

    async getTableDataRowCount() {
        this.rowCount = 0;

        await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " this.columnCount: " + this.columnCount);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            return this.rowCount = count;
        });

        return this.rowCount;
    }

    // verify by filter 

    async verifyAlertNameColumn(AlertName) {
        await browser.sleep(500);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            for (let i = 1; i <= count; i++) {
                await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[6]/div')).getText().then(async function (cellValue) {
                    //assert
                    await expect(cellValue).to.include(AlertName);
                });
            };
        });
    }
    // get alert metric data from every row 
    async verifyAlertMetricColumn(AlertName) {
        await browser.sleep(500);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            for (let i = 1; i <= count; i++) {
                await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[11]/div')).getText().then(async function (cellValue) {
                    //assert
                    await expect(cellValue).to.include(AlertName);
                });
            };
        });
    }

    // get node data from every row 
    async verifyNodeColumn(ResourceName) {
        await browser.sleep(500);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            for (let i = 1; i <= count; i++) {
                await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[9]/div')).getText().then(async function (cellValue) {
                    //assert
                    await expect(cellValue).to.include(ResourceName);
                });
            };
        });
    }

    // get source data from every row 
    async verifySourceColumn(Node) {
        await browser.sleep(500);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            for (let i = 1; i <= count; i++) {
                await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[8]/div')).getText().then(async function (cellValue) {
                    //assert
                    await expect(cellValue).to.include(Node);
                });
            };
        });
    }

    // get severity data from every row 
    async verifySeverityColumn(Node) {
        await browser.sleep(500);
        await element.all(by.xpath('//table[@class="undefined"]/tbody/tr')).count().then(async (count) => {
            for (let i = 1; i <= count; i++) {
                await element(by.xpath('//table[@class="undefined"]/tbody/tr[' + i + ']/td[1]/div[@class="highlight bg-ok ng-star-inserted"]')).getText().then(async function (cellValue) {
                });
            };
        });
    }
}

