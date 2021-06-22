import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
var EC = browser.ExpectedConditions;
export class dropdowns {
  public drpDropdownValue: ElementFinder
  
    constructor(SelectTimeZone:ElementFinder) {
  this.drpDropdownValue = SelectTimeZone
 
    }

    public selectByVisibleText(DropdownValue:string) {
        this.drpDropdownValue.click();
        this.drpDropdownValue.element(by.xpath("//span[text()='"+DropdownValue+"']")).click();
    }
}