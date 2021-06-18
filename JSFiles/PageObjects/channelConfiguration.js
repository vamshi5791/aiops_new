"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class channelConfiguration {
    constructor() {
        this.channelConfiguration = protractor_1.element(protractor_1.by.xpath('//span[text()="Channel Configuration"]'));
        this.createNewChannel = protractor_1.element(protractor_1.by.xpath('//span[text()="Create New Channel"]'));
        this.channelName = protractor_1.element(protractor_1.by.name('cname'));
        this.channelType = protractor_1.element(protractor_1.by.xpath('//label[text()="Select Channel type"]'));
        this.selectEmail = protractor_1.element(protractor_1.by.xpath('//span[text()="EMAIL"]'));
        this.channelIntegrationType = protractor_1.element(protractor_1.by.xpath('//label[@class="ng-tns-c18-30 smo-dropdown-label-legand dropdown-label-ms smo-inputtext ng-star-inserted"]'));
        this.selectOutlook = protractor_1.element(protractor_1.by.xpath('//span[text()="outlook"]'));
        this.emailId = protractor_1.element(protractor_1.by.xpath("//input[@label='Email ID *']"));
        this.txtPassword = protractor_1.element(protractor_1.by.xpath('//input[@label="Email ID *"]//following::input[@label="Password *"][1]'));
        this.clientId = protractor_1.element(protractor_1.by.xpath("//input[@label='Client ID *']"));
        this.clientSecret = protractor_1.element(protractor_1.by.xpath("//input[@label='Client Secret *']"));
        this.tenantId = protractor_1.element(protractor_1.by.xpath("//input[@label='Tenant ID *']"));
        this.automationStory = protractor_1.element(protractor_1.by.xpath("//input[@label='Automation Story']"));
        this.checkProcessListAsList = protractor_1.element(protractor_1.by.xpath('//input[@label="Automation Story"]//following::label[text()="Process request as list"]'));
        this.enterListSize = protractor_1.element(protractor_1.by.name("listsize"));
        this.saveAndConfigure = protractor_1.element(protractor_1.by.xpath('//input[@label="Automation Story"]//following::span[text()="Save & Configure"]'));
    }
}
exports.channelConfiguration = channelConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9DaGFubmVsQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLG9CQUFvQjtJQW1CN0I7UUFFSSxJQUFJLENBQUMsb0JBQW9CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0R0FBNEcsQ0FBQyxDQUFDLENBQUM7UUFDNUosSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDLENBQUE7UUFDOUcsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0ZBQXdGLENBQUMsQ0FBQyxDQUFDO1FBQ3hJLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDLENBQUM7SUFFOUgsQ0FBQztDQUNKO0FBdkNELG9EQXVDQyJ9