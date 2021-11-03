import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var drp = new support();
var expect = chai.expect;
var fs = require('fs');
var fetch = require("node-fetch");
var accessToken;
var alertDetails;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var token_URL = properties.get("main." + globalThis.environment + "_token_URL");
var access_Token_Body = properties.get("main." + globalThis.environment + "_AccessTokenBody");
var alertMappingURL = properties.get("main." + globalThis.environment + "_alertMapping");
export class Dashboard {
    btnDashboard = element(by.xpath('//a[text()="Dashboard"]'));
    btnSeverity = element(by.xpath('//span[text()="All"]'));
    txtSource = element(by.xpath('//label[text()="Source"]//following::input[@type="text"]'));
    btnHostName = element(by.xpath('//th[text()="Host Name"]//following::div[@class="alert-message"]'));
    txtTicketDetailsTitle = element(by.className('graph-title'));
    async clickOnDashboard() {
        await this.btnDashboard.click()
    }
    async clickOnHostName() {
        await this.btnHostName.click()
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

    async getAccessToken() {
        await fetch(token_URL, {
            method: 'POST',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            body: access_Token_Body,
        }).then(response => response.json())
            .then(resp => {
                // console.log(resp.access_token)
                accessToken = resp.access_token;
                //return accessToken;
            })
        return accessToken;
    }
    async deviceAvailability(ProjectId: string, deviceName: string) {
        const accessToken = await this.getAccessToken();
        var urldeviceAvail = alertMappingURL + '/api/deviceAvailability/' + ProjectId + '/' + deviceName;
        await fetch(urldeviceAvail, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Organization-name": "ustglobal",
                "Organization-key": 1,
                "Authorization": "Bearer " + accessToken,
            },
        }).then(response => response.json())
            .then(resp => {
                alertDetails = resp.alertDetails
            })
        return alertDetails;
    }
};