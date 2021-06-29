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
class LogIn {
    constructor() {
        this.txtUserName = protractor_1.element(protractor_1.by.name("username"));
        this.txtPassword = protractor_1.element(protractor_1.by.name("password"));
        this.btnClickOnSignIn = protractor_1.element(protractor_1.by.xpath('//input[@name="login"]'));
    }
    LogIn_Details(UserName, Password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.txtUserName.sendKeys(UserName);
            yield this.txtPassword.sendKeys(Password);
            yield this.btnClickOnSignIn.click();
        });
    }
}
exports.LogIn = LogIn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nSW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9Mb2dJbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTBFO0FBQzFFLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLE1BQWEsS0FBSztJQUFsQjtRQUNJLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDMUMsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUMxQyxxQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO0lBUWxFLENBQUM7SUFOUyxhQUFhLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDbEQsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUVKO0FBWEQsc0JBV0MifQ==