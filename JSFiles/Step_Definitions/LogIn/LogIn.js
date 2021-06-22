"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const LogIn_1 = require("../../PageObjects/LogIn");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = protractor_1.browser.ExpectedConditions;
var fs = require('fs');
var expect = chai_1.default.expect;
let objLogIn = new LogIn_1.LogIn();
cucumber_1.Given('User with ITOps role is available {string}', function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(properties.get('main.url')).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
cucumber_1.When('enter Username and Password {string}, {string}', function (usernameData, passwordData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objLogIn.txtUserName.sendKeys(usernameData);
        yield objLogIn.txtPassword.sendKeys(passwordData);
    });
});
cucumber_1.When('click on Login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objLogIn.btnClickOnSignIn.click();
    });
});
cucumber_1.Then('ITOps home page is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.getTitle().then(function (txtTitle) {
            console.log("Page Title: " + txtTitle);
            expect(txtTitle).to.include('Itops');
        });
        yield protractor_1.browser.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
        yield protractor_1.browser.element(protractor_1.by.xpath('//span[text()="Logout"]')).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nSW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TdGVwX0RlZmluaXRpb25zL0xvZ0luL0xvZ0luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFDbkUsMkNBQWlGO0FBQ2pGLGdEQUF3QjtBQUN4QixtREFBZ0Q7QUFFaEQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQzNFLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUUzQixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLFVBQWdCLEdBQUc7O1FBQ25FLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDbkQsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsZ0RBQWdELEVBQUUsVUFBZ0IsWUFBWSxFQUFFLFlBQVk7O1FBQzdGLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVCQUF1QixFQUFFOztRQUMxQixNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFOztRQUNoQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVE7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxNQUFPLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JHLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUUsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9