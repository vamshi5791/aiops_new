import { ElementFinder, element, by, promise, browser, protractor } from "protractor";

export class Configuration {
    
    btnConfiguration = element(by.xpath('//a[text()="Configuration"]'));

};