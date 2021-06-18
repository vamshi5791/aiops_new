"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddUser {
    constructor() {
        this.btnAddUser = protractor_1.element(protractor_1.by.xpath('//span[text()="Add User"]'));
        this.LstSelectUser = protractor_1.element(protractor_1.by.className("smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"));
        this.rdoSelectRole = protractor_1.element(protractor_1.by.xpath('//label[text()="itops_admin"]'));
        this.btnAddUserDetails = protractor_1.element(protractor_1.by.xpath('//label[text()="itops_admin"]//following::span[text()="Add User"]'));
        this.btnInstall = protractor_1.element(protractor_1.by.xpath('//span[text()="INSTALL"]'));
    }
}
exports.AddUser = AddUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0FkZFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxPQUFPO0lBUWxCO1FBRU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDhFQUE4RSxDQUFDLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsYUFBYSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLFVBQVUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQWhCRCwwQkFnQkMifQ==