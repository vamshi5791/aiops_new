import { ElementFinder, element, by, promise, browser } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();
export class TicketDetailsPage{

    //Status tab elements    
    drpDownStatus = element(by.css(".button-icon"));    
    resolveOption = element(by.xpath("//div[.='Resolve']"));

    //Closure note pop-up
    closureNoteTxtField =  element(by.xpath("//textarea[@class='textarea-width resolve-textarea ng-untouched ng-pristine ng-invalid']"));
    btnResolve = element(by.xpath("//smo-button[@class='ng-star-inserted']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"));
}