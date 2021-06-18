import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class channelConfiguration{

    channelConfiguration : ElementFinder;
    createNewChannel : ElementFinder;
    channelType : ElementFinder;
    selectEmail : ElementFinder;
    channelName : ElementFinder;
    channelIntegrationType : ElementFinder;
    selectOutlook : ElementFinder;
    emailId: ElementFinder;
    txtPassword: ElementFinder;
    clientId : ElementFinder;
    clientSecret : ElementFinder;
    tenantId : ElementFinder;
    automationStory : ElementFinder;
    checkProcessListAsList : ElementFinder;
    enterListSize : ElementFinder;
    saveAndConfigure : ElementFinder;

    constructor(){

        this.channelConfiguration=element(by.xpath('//span[text()="Channel Configuration"]'));
        this.createNewChannel=element(by.xpath('//span[text()="Create New Channel"]'));
        this.channelName=element(by.name('cname'));
        this.channelType=element(by.xpath('//label[text()="Select Channel type"]'));
        this.selectEmail=element(by.xpath('//span[text()="EMAIL"]'));
        this.channelIntegrationType=element(by.xpath('//label[@class="ng-tns-c18-30 smo-dropdown-label-legand dropdown-label-ms smo-inputtext ng-star-inserted"]'));
        this.selectOutlook=element(by.xpath('//span[text()="outlook"]'));
        this.emailId = element(by.xpath("//input[@label='Email ID *']"));
        this.txtPassword = element(by.xpath('//input[@label="Email ID *"]//following::input[@label="Password *"][1]'))
        this.clientId=element(by.xpath("//input[@label='Client ID *']"));
        this.clientSecret=element(by.xpath("//input[@label='Client Secret *']"));
        this.tenantId=element(by.xpath("//input[@label='Tenant ID *']"));
        this.automationStory=element(by.xpath("//input[@label='Automation Story']"));
        this.checkProcessListAsList=element(by.xpath('//input[@label="Automation Story"]//following::label[text()="Process request as list"]'));
        this.enterListSize=element(by.name("listsize"));
        this.saveAndConfigure=element(by.xpath('//input[@label="Automation Story"]//following::span[text()="Save & Configure"]'));

    }
}
