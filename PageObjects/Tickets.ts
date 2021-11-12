import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
import { support } from "../support/support";
var fs = require('fs');
var drp = new support();
export class Tickets {

    lnkTickets = element(by.xpath('//a[text()="Tickets"]'))
    txtCreateTimeAndUpdateSort = element(by.xpath("//th[text()='Created Time And Date ']//following::th[text()='Updated Time And Date ']"))
    btnQuickFilter = element(by.xpath("//span[contains(@class,'filter smo')]"))
    txtSearchForTicket = element(by.xpath("//input[@placeholder='Search']"))
    txtAutoRefreshInEvery = element(by.xpath("//span[text()=' Auto-refresh in every ']"))
    txtRowsPerPage = element(by.xpath("//span[text()='Rows per page']"))
    btnTicketStateDropdown = element(by.xpath("//span[contains(@class,'smo-dropdown-trigger-icon smo-clickable')]"))
    txtResolveClosureNote = element(by.xpath("//textarea[contains(@class,'textarea-width resolve-textarea')]"))
    btnResolveClosureNote = element(by.xpath('//button[@class="smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-active-ms smo-button-text-only"]'))
    txtTicketTitle = element(by.xpath("//span[text()='Tickets']//following::span[contains(@class,'smo-tabview-title smo-tabview-title-sm')]"))
    txtCloseTicketDetailsIcon = element(by.xpath("//span[text()='Tickets']//following::span[contains(@class,'smo-tabview-title smo-tabview-title-sm')]//following::span[contains(@class,'smo-tabview-close smo')]"))
    txtConversationTab = element(by.xpath("//span[text()='Conversation']"))
    btnTicketNumber = element(by.xpath("//span[contains(@class,'text-font-dark text-with-bold')]"))
    txtNewTabTicketDetailsPage = element(by.className("smo-state-default smo-tabview-selected smo-state-active smo-tabview-sm ng-star-inserted"))
    btnFilterByStatusTypeDropDown = element(by.xpath("//span[contains(@class,'smo-multiselect-trigger-icon smo-clickable')]"))

    btnFilterByStatusTypeDrp = element(by.xpath('//span[text()=" Filter by Status Type "]'))

    btnFilterByPriorityDropdown = element(by.xpath('//span[text()=" Filter by Priority "]'))

    btnCritical = element(by.xpath('//li[@aria-label="1 - Critical"]'))

    btnHigh = element(by.xpath('//li[@aria-label="2 - High"]'))
    async FilterByPriorityDropdown() {

        await this.btnFilterByPriorityDropdown.click()
    }
    async Critical() {
        await this.btnCritical.click()
    }
    async High() {
        await this.btnHigh.click()
    }
    async FilterByStatusTypeDrp() {
        await this.btnFilterByStatusTypeDrp.click()
    }

    async clickOnFilterByStatusTypeDropDown(Status) {
        await this.btnFilterByStatusTypeDropDown.click()
        drp.selectByVisibleText(Status)
    }
    async clickOnTicketNumber() {
        await this.btnTicketNumber.click()
    }
    async clickOnTicketPage() {
        await this.lnkTickets.click()
    }
    async verifyingTicketConsoleTitles(TicketID, Title, Priority, Description) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + TicketID + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Title + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Priority + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Description + ' " ]'))), 10000);
    }

    async verifyingTicketConsole(CreatedTimeAndDate, UpdatedTimeAndDate, Category, State) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + CreatedTimeAndDate + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + UpdatedTimeAndDate + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Category + ' " ]'))), 10000);
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + State + ' " ]'))), 10000);
    }
    async clickOnQuickFilter() {
        await browser.sleep(2000)
        await browser.wait(EC.visibilityOf(this.btnQuickFilter), 10000);
        await browser.wait(EC.presenceOf(this.btnQuickFilter), 10000);
        await browser.wait(EC.elementToBeClickable(this.btnQuickFilter), 10000);
        await this.btnQuickFilter.click()
    }
    async verifyField(FieldName) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + FieldName + '" ]'))), 10000);
    }
    async verifyTicketStatus(Status) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="' + Status + '"]'))), 10000);
    }
    async verifyTabs(Status) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + Status + '"]'))), 10000);
    }
    async verifyingSections(Status) {
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + Status + '"]'))), 10000);
    }
    async verifyingCreatedTicket() {
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[contains(@class,'text-font-dark text-with-bold')]"))), 10000);
    }
    async verifyingCreatedTicketInAlertConsole() {
        await browser.wait(EC.invisibilityOf(element(by.xpath("//span[contains(@class,'text-font-dark text-with-bold')]"))), 10000);
    }
    async verifyingField(FieldName) {
        await browser.wait(EC.invisibilityOf(element(by.xpath('//span[text()="' + FieldName + '"]'))), 10000);
    }

    async clickOnTicketStateDropdown() {
        await this.btnTicketStateDropdown.click()
    }
    async enterResolveClosureNote(ResolveNote) {
        //await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='Ticket Resolution']"))), 10000);
        await browser.sleep(5000)
        await this.txtResolveClosureNote.sendKeys(ResolveNote)
    }
    async clickOnResolveClosureNote() {
        await browser.sleep(2000)
        await this.btnResolveClosureNote.click()
    }
}