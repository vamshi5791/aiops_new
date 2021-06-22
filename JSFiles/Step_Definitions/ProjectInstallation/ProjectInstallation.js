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
const ProjectListing_1 = require("../../PageObjects/ProjectListing");
const ProjectConfiuration_1 = require("../../PageObjects/ProjectConfiuration");
const dropdown_1 = require("../../support/dropdown");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = protractor_1.browser.ExpectedConditions;
var fs = require('fs');
var expect = chai_1.default.expect;
let objLogIn = new LogIn_1.LogIn();
let objProjectList = new ProjectListing_1.ProjestListing();
let objConfiguration = new ProjectConfiuration_1.ProjectConfig();
cucumber_1.Given('LogIn with ITOps role is available {string}', function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(properties.get('main.url')).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
cucumber_1.When('enter Username, Password and click on login button {string}, {string}', function (usernameData, passwordData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objLogIn.txtUserName.sendKeys(usernameData);
        yield objLogIn.txtPassword.sendKeys(passwordData);
        yield objLogIn.btnClickOnSignIn.click();
    });
});
//Project creation 
cucumber_1.When('click on create project', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objProjectList.clickOnCreateProject.click();
    });
});
cucumber_1.When('Enter project name {string}', function (projectname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.projectname.sendKeys(projectname);
    });
});
cucumber_1.When('Enter description {string}', function (description) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.description.sendKeys(description);
    });
});
cucumber_1.When('Click on create button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.btnCreate.click();
    });
});
cucumber_1.Then('user is taken to the project configuration page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.className("smo-progress-spinner-circle"))), 100000);
        yield protractor_1.browser.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
        yield objProjectList.btnLogOut.click();
    });
});
cucumber_1.Then('user is taken to the project configuration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Created Succesfully"]'))), 100000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Created Succesfully"]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('Project Created Succesfully');
        });
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.id("textInput_0_2_0"))), 100000);
    });
});
//General configuration
cucumber_1.When('enter ConfigDetails {string}, {string}, {string}, {string}, {string}, {string}', function (ServiceNowHost, serivceUname, servicePwd, thresholdCount, TestITSM, ITSMversion) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            objConfiguration.txtServiceNowHost.sendKeys(ServiceNowHost);
        });
        yield objConfiguration.txtServiceUsername.clear().then(function () {
            objConfiguration.txtServiceUsername.sendKeys(serivceUname);
        });
        yield objConfiguration.pwdServicePassword.clear().then(function () {
            objConfiguration.pwdServicePassword.sendKeys(servicePwd);
        });
        yield objConfiguration.txtThresholdCount.clear().then(function () {
            objConfiguration.txtThresholdCount.sendKeys(thresholdCount);
        });
        yield objConfiguration.txtITSMname.clear().then(function () {
            objConfiguration.txtITSMname.sendKeys(TestITSM);
        });
        yield objConfiguration.txtITSMversion.clear().then(function () {
            objConfiguration.txtITSMversion.sendKeys(ITSMversion);
        });
    });
});
cucumber_1.When('select ITSM TimeZone {string}', function (ITSMTimeZone) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        });
        var drp = new dropdown_1.dropdowns(objConfiguration.drpTimeZone);
        yield drp.selectByVisibleText(ITSMTimeZone);
    });
});
cucumber_1.When('select ITOps Flavor {string}', function (ITOpsFlavor) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        });
        var drp = new dropdown_1.dropdowns(objConfiguration.drpITOPsflavour);
        yield drp.selectByVisibleText(ITOpsFlavor);
    });
});
cucumber_1.When('click save general config button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        });
        yield objConfiguration.btn_saveGeneralConfig.click();
    });
});
cucumber_1.Then('verify Success message for General Configuration must be shown as a toaster', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
            expect(text).to.include('Project Configurations Updated');
        });
    });
});
//Schedular configuration
cucumber_1.When('click on Schedular configuration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.lnkSchedularConfiguration.click();
    });
});
cucumber_1.When('select correlation interval duration {string}', function (Correlation) {
    return __awaiter(this, void 0, void 0, function* () {
        var drp = new dropdown_1.dropdowns(objConfiguration.correlationInterval);
        yield drp.selectByVisibleText(Correlation);
    });
});
cucumber_1.When('select cluster interval duration {string}', function (AutoClosure) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,450);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                var drp = new dropdown_1.dropdowns(objConfiguration.clusterInterval);
                yield drp.selectByVisibleText(AutoClosure);
            });
        });
        yield protractor_1.browser.executeScript('window.scrollTo(0,500);').then(function () {
        });
    });
});
cucumber_1.When('select analytics duration {string}', function (AlertAnalytics) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,700);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                var drp = new dropdown_1.dropdowns(objConfiguration.analyticsInterval);
                yield drp.selectByVisibleText(AlertAnalytics);
            });
        });
    });
});
cucumber_1.When('select prediction duration {string}', function (BatchPrediction) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                var drp = new dropdown_1.dropdowns(objConfiguration.predictionInterval);
                yield drp.selectByVisibleText(BatchPrediction);
            });
        });
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
cucumber_1.When('click save schedule config button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.btnSaveSchedularConfig.click();
    });
});
cucumber_1.Then('verify Success message for Schedular Configuration must be shown as a toaster', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('Project Configurations Updated');
        });
    });
});
//Error Responce Configuration
cucumber_1.When('click on Error Responce Configuration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.lnkErrorConfiguration.click();
    });
});
cucumber_1.When('enter fromemail {string}', function (frommailid) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,300);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtServiceNowHost.clear().then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield objConfiguration.txtFromEmail.sendKeys(frommailid);
                    });
                });
            });
        });
    });
});
cucumber_1.When('enter emailPassword {string}', function (pwdfrommailid) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.pwdFromEmail.sendKeys(pwdfrommailid);
            });
        });
    });
});
cucumber_1.When('enter toemail {string}', function (pwdfrommailid) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () {
        });
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtToEmail.sendKeys(pwdfrommailid);
            });
        });
    });
});
cucumber_1.When('click save Error config button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.btnSaveErrorConfig.click();
    });
});
cucumber_1.Then('verify Success message for Error Responce Configuration must be shown as a toaster', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('Project Configurations Updated');
        });
    });
});
//Ticket Dump Configuration
cucumber_1.When('click on Ticket Dump Configuration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.lnkDumpConfiguration.click();
    });
});
cucumber_1.When('enter Ticket Dump Source Hostname {string}', function (hostname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () {
        });
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtTicketDumpSourceHostname.sendKeys(hostname);
            });
        });
    });
});
cucumber_1.When('enter Dump Source File Path {string}', function (filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtDumpSourceFilePath.sendKeys(filepath);
            });
        });
    });
});
cucumber_1.When('enter Source Username {string}', function (SUname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtSourceUsername.sendKeys(SUname);
            });
        });
    });
});
cucumber_1.When('enter Source Password {string}', function (Upassword) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtSourcePassword.sendKeys(Upassword);
            });
        });
    });
});
cucumber_1.When('enter Ticket number column name in dump file {string}', function (dumpfile) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtTicketNumberColumnNameInDumpFile.sendKeys(dumpfile);
            });
        });
    });
});
cucumber_1.When('enter Work Notes column name in column file {string}', function (columnfile) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtWorkNotesColumnNameInColumnFile.sendKeys(columnfile);
            });
        });
    });
});
cucumber_1.When('enter Short Description column name in dump file {string}', function (dumpfile) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtShortDescriptionColumnNameInDumpFile.sendKeys(dumpfile);
            });
        });
    });
});
cucumber_1.When('enter Category column name in dump file {string}', function (dumpfile) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,300);').then(function () {
        });
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtCategoryColumnNameInDumpFile.sendKeys(dumpfile);
            });
        });
    });
});
cucumber_1.When('enter Sub Category column name in dump file {string}', function (dumpfile) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.txtServiceNowHost.clear().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.txtSubCategoryColumnNameInDumpFile.sendKeys(dumpfile);
            });
        });
    });
});
cucumber_1.When('click save ticket dump config button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.btnSaveTicketConfig.click();
    });
});
cucumber_1.Then('Success message for Ticket Dump Configuration must be shown as a toaster', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('Project Configurations Updated');
        });
    });
});
//Channel Configuration
cucumber_1.When('Click on Channel Configuration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//span[text()="Channel Configuration"]'))), 100000);
        yield objConfiguration.channelConfiguration.click();
    });
});
cucumber_1.When('Click on create new Channel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.createNewChannel.click();
    });
});
cucumber_1.When('Enter channel name {string}', function (channelName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.channelName.sendKeys(channelName);
    });
});
cucumber_1.When('Click on Select channel type {string}', function (ChannelType) {
    return __awaiter(this, void 0, void 0, function* () {
        var drp = new dropdown_1.dropdowns(objConfiguration.channelType);
        yield drp.selectByVisibleText(ChannelType);
    });
});
cucumber_1.When('Select channel integration type {string}', function (ChannelIntegration) {
    return __awaiter(this, void 0, void 0, function* () {
        var drp = new dropdown_1.dropdowns(objConfiguration.channelIntegrationType);
        yield drp.selectByVisibleText(ChannelIntegration);
    });
});
cucumber_1.When('enter Email Id {string}', function (EmailId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.emailId.sendKeys(EmailId);
    });
});
cucumber_1.When('enter Client Id {string}', function (ClientId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.clientId.sendKeys(ClientId);
    });
});
cucumber_1.When('enter secret Id {string}', function (secretId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.clientSecret.sendKeys(secretId);
    });
});
cucumber_1.When('enter tenet Id {string}', function (tenetId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.tenantId.sendKeys(tenetId);
    });
});
cucumber_1.When('Enter Automation story {string}', function (AutomationStorty) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.automationStory.sendKeys(AutomationStorty);
    });
});
cucumber_1.When('click on check box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.checkProcessListAsList.click();
    });
});
cucumber_1.When('Enter lIst size {string}', function (ListSize) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.enterListSize.sendKeys(ListSize);
    });
});
cucumber_1.When('Click on save and configure button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.saveAndConfigure.click();
    });
});
cucumber_1.Then('Channel created successfully is shown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('Project Configurations Updated');
        });
    });
});
//Add User
cucumber_1.When('click on Add User', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
        yield objConfiguration.btnAddUser.click();
    });
});
cucumber_1.When('Click on Select User {string}', function (UserName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.LstSelectUser.click();
        yield protractor_1.element(protractor_1.by.className("ng-tns-c18-13 smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1")).sendKeys(UserName);
        yield protractor_1.element(protractor_1.by.xpath('//span[text()="Kishor Macharla(UST,I..."]')).click();
    });
});
cucumber_1.When('select role', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.rdoSelectRole.click();
    });
});
cucumber_1.When('Add user details', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.btnAddUserDetails.click();
    });
});
cucumber_1.Then('User must be added and listed in the below list', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath('//div[text()="User added."]'))), 100000);
        yield protractor_1.element(protractor_1.by.xpath('//div[text()="User added."]')).getText().then(function (text) {
            console.log(text);
            expect(text).to.include('User added.');
        });
    });
});
cucumber_1.When('Click on Install', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.xpath('//div[text()="User added."]'))), 100000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        });
        yield objConfiguration.btnInstall.click();
    });
});
cucumber_1.Then('Project must be installed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
        yield objProjectList.btnLogOut.click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdEluc3RhbGxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1N0ZXBfRGVmaW5pdGlvbnMvUHJvamVjdEluc3RhbGxhdGlvbi9Qcm9qZWN0SW5zdGFsbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFDbkUsMkNBQWlGO0FBQ2pGLGdEQUF3QjtBQUN4QixtREFBZ0Q7QUFDaEQscUVBQWlFO0FBQ2pFLCtFQUFzRTtBQUN0RSxxREFBbUQ7QUFDbkQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQzNFLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUMzQixJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUMxQyxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWEsRUFBRSxDQUFDO0FBRzNDLGdCQUFLLENBQUMsNkNBQTZDLEVBQUUsVUFBZ0IsR0FBRzs7UUFDdEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztZQUNuRCxDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyx1RUFBdUUsRUFBRSxVQUFnQixZQUFZLEVBQUUsWUFBWTs7UUFDdEgsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENB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