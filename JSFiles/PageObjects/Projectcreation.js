"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Projestcreation {
    constructor() {
        this.clickOnCreateProject = protractor_1.element(protractor_1.by.xpath('//span[text()="Create New Project"]'));
        this.projectname = protractor_1.element(protractor_1.by.xpath('//input[@name="pjctName"]'));
        this.description = protractor_1.element(protractor_1.by.css('#project_details > app-project-details > div.row.pb-4 > div > fieldset > textarea'));
        this.btnCreate = protractor_1.element(protractor_1.by.xpath('//span[text()="Create"]'));
    }
}
exports.Projestcreation = Projestcreation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdGNyZWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvUHJvamVjdGNyZWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQU0xQjtRQUVFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7UUFDekgsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSjtBQWJELDBDQWFDIn0=