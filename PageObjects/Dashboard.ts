import { ElementFinder, element, by, promise, browser, protractor } from "protractor";

export class Dashboard {
    btnDashboard = element(by.xpath('//a[text()="Dashboard"]'));

};