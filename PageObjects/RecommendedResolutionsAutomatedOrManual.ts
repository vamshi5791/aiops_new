import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
import { support } from "../support/support";
var fs = require('fs');
var drp = new support();
export class recommendedResolution {
    btnTicketId = element(by.xpath("//span[contains(@class,'text-font-dark cursor-pt')]"))
    btnResolutionPopUp = element(by.className("modal-content"))
    btnResolve = element(by.className("smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-active-ms smo-button-text-only"))
    btnAutomated = element(by.className("smo-radiobutton-label smo-label-disabled smo-radiobutton-label-sm ng-star-inserted"))
    btnManual = element(by.className("smo-radiobutton-label smo-label-active smo-label-disabled smo-radiobutton-label-sm ng-star-inserted"))
    txtTicketId = element(by.xpath("//span[text()='TICKET ID']"))
    txtResolution = element(by.xpath("//span[text()='RESOLUTION']"))
    txtResolutionQuality = element(by.xpath("//span[text()='RESOLUTION QUALITY']"))
    txtResolve = element(by.xpath("//span[text()='Resolve"))
    btnCancel = element(by.xpath("//span[text()='Cancel']"))




    async clickOnTicketId() {
        await this.btnTicketId.click()
    }
} 