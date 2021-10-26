import { ElementFinder, element, by, promise, browser, protractor } from "protractor";

export class TicketConsole {

    btnTickets = element(by.xpath('//a[text()="Tickets"]'))
    btnQuickFilter = element(by.className('filter smo smo-filter'))
    txtTicketTitle = element(by.xpath('//span[text()="Tickets"]'))
    drpFilterByAssignedTo = element(by.xpath('//label[text()="Assigned To"]'))
    txtNoneFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="None"]'))
    txtMeFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="Me"]'))
    txtOthersFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="Others"]'))
    drpFilterByAssignedGroup = element(by.xpath('//smo-multiselect-dropdown[@defaultlabel="Assigned Group"]'))
    txtNoneFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="None"]'))
    txtMyGroupsFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="My Groups"]'))
    txtMyGroupNameFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item[3]/li/span/text()'))
    btncloseQuickFilter=element(by.className("smo-overlaypanel-close-icon smo smo-close-black-alt"))
    


    chkMyGroupFilterByAssignedGroupSelected = element(by.xpath('//smo-multiselect-item//span[text()="My Groups"]//preceding::span[@class="smo-chkbox-icon smo-clickable smo smo-check ng-star-inserted"]'))
    lblAssignedGroup = element(by.xpath('//div[@class="item-key-text ng-star-inserted" and text()="Assigned Group : "]'))
    btnFilterChip = element(by.className('filter-result-span-sm smo-small-chips'))
    txtFirstTicketNumber = element(by.xpath('//table[@class="undefined"]/tbody/tr[1]/td[2]/span'))
    chkMyGroupFilterByAssignedGroupsVal1 = element(by.xpath('//smo-multiselect-item[3]/li/span/text()//following::li[1]'))
    

    async Tickets() {
        await this.btnTickets.click();
    
      }
      async clickOnQuickFilter(){
        await this.btnQuickFilter.click();
    }

    async clickOnFilterAssignedTo(){
        await this.drpFilterByAssignedTo.click();
    }

    async clickOnFilterAssignedGroup(){
        await this.drpFilterByAssignedGroup.click();
    }


}