"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var EC = protractor_1.browser.ExpectedConditions;
var fs = require('fs');
class ProjectListingPage {
    constructor() {
        this.btnClickOnCreateProject = protractor_1.element(protractor_1.by.xpath('//span[text()="Create New Project"]'));
        this.btnProfile = protractor_1.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2"));
        this.btnLogOut = protractor_1.element(protractor_1.by.xpath('//span[text()="Logout"]'));
    }
    ClickOnProjectCreateButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnClickOnCreateProject.click();
        });
    }
    ClickOnProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnProfile.click();
        });
    }
    LogOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnLogOut.click();
        });
    }
}
exports.ProjectListingPage = ProjectListingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdExpc3RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9Qcm9qZWN0TGlzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTBFO0FBQzFFLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLE1BQWEsa0JBQWtCO0lBQS9CO1FBRUcsNEJBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUNuRixlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztRQUM1RixjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQVc1RCxDQUFDO0lBVFUsMEJBQTBCOztZQUM5QixNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFDSyxjQUFjOztZQUNuQixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBQ00sTUFBTTs7WUFDVixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBQ0w7QUFmRCxnREFlQyJ9