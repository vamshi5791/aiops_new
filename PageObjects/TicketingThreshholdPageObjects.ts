import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();



export class TicketingThreshold {

    // elements for Add Failure Policy

    lnkTicketingThreshold = element(by.xpath('//div[text()="Ticketing Threshold"]'));
    lnkAddNewThreshold = element(by.xpath('//div[text()=" Add New Threshold "]'));
    drpSource = element(by.xpath('//span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'));
    txtClusterSize = element(by.xpath('//input[@label="Cluster Size *"]'));
    txtTimeInterval = element(by.xpath('//input[@label="Time interval in minutes"]'));
    btnAddThreshold = element(by.xpath('//span[text()="Add Threshold"]'));
    btnSaveThreshold = element(by.xpath('//span[text()="Save Threshold"]'))
    btnYes = element(by.xpath('//span[text()="Yes"]'))


    /* methods written for add, edit acknowledgement policy 
    */

    async clickOnTicketingThreshold(){
        await this.lnkTicketingThreshold.click();
    }
    async Yes(){
        await this.btnYes.click();
    }
    async clickOnAddNewThresholdButton(){
        await this.lnkAddNewThreshold.click();
    }
    
    
    async selectSource(source){
        await this.drpSource.click();
        await drp.selectByVisibleText(source);
    }

    async enterCluserSize(clustersize){
        await this.txtClusterSize.sendKeys(clustersize);
    }

    async enterTimeInterval(timeinterval){
        await this.txtTimeInterval.sendKeys(timeinterval);
    }

    async clickOnAddThreshold(){
        await this.btnAddThreshold.click();
    }
    async SaveThreshold(){
        await this.btnSaveThreshold.click();
    }
}

