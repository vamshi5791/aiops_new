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
const Projectcreation_1 = require("../../PageObjects/Projectcreation");
const AddUser_1 = require("../../PageObjects/AddUser");
const ProjectConfiuration_1 = require("../../PageObjects/ProjectConfiuration");
const ChannelConfiguration_1 = require("../../PageObjects/ChannelConfiguration");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/data.properties');
var EC = protractor_1.browser.ExpectedConditions;
var fs = require('fs');
var expect = chai_1.default.expect;
let objLogIn = new LogIn_1.LogIn();
let objCreateProject = new Projectcreation_1.Projestcreation();
let ObjAddUser = new AddUser_1.AddUser();
let objConfiguration = new ProjectConfiuration_1.scheduleconfig();
let objChannelConfiguration = new ChannelConfiguration_1.channelConfiguration();
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
        yield objCreateProject.clickOnCreateProject.click();
    });
});
cucumber_1.When('Enter project name {string}', function (projectname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objCreateProject.projectname.sendKeys(projectname);
    });
});
cucumber_1.When('Enter description {string}', function (description) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objCreateProject.description.sendKeys(description);
    });
});
cucumber_1.When('Click on create button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objCreateProject.btnCreate.click();
    });
});
cucumber_1.Then('user is taken to the project configuration page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.className("smo-progress-spinner-circle"))), 100000);
        yield protractor_1.browser.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
        yield objLogIn.btnLogOut.click();
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
cucumber_1.When('click timezone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        });
        yield objConfiguration.drpTimeZone.click();
    });
});
cucumber_1.When('select timezone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.drpTimeoneselect.click();
    });
});
cucumber_1.When('click ITOPsflavour', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.drpITOPsflavour.click();
    });
});
cucumber_1.When('select ITOPsflavour', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.drpITOPsflavourSelect.click();
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
        yield objConfiguration.correlationInterval.click();
    });
});
cucumber_1.When('select correlation interval duration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objConfiguration.correlationIntervalDuration.click();
    });
});
cucumber_1.When('select cluster interval duration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,450);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.clusterInterval.click();
                yield objConfiguration.clusterDuration.click();
            });
        });
        yield protractor_1.browser.executeScript('window.scrollTo(0,500);').then(function () {
        });
    });
});
cucumber_1.When('select analytics duration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,700);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.analyticsInterval.click();
                yield objConfiguration.analyticsDuration.click();
            });
        });
    });
});
cucumber_1.When('select prediction duration', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield objConfiguration.predictionInterval.click();
                yield objConfiguration.predictionDuration.click();
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
        yield objChannelConfiguration.channelConfiguration.click();
    });
});
cucumber_1.When('Click on create new Channel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.createNewChannel.click();
    });
});
cucumber_1.When('Enter channel name {string}', function (channelName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.channelName.sendKeys(channelName);
    });
});
cucumber_1.When('Click on Select channel type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.channelType.click();
    });
});
cucumber_1.When('click on EMAIL', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.selectEmail.click();
    });
});
cucumber_1.When('Channel Integration Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.channelIntegrationType.click();
    });
});
cucumber_1.When('Select channel integration type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.selectOutlook.click();
    });
});
cucumber_1.When('enter Email Id {string}', function (EmailId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.emailId.sendKeys(EmailId);
    });
});
cucumber_1.When('enter Client Id {string}', function (EmailId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.emailId.sendKeys(EmailId);
    });
});
cucumber_1.When('enter secret Id {string}', function (EmailId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.emailId.sendKeys(EmailId);
    });
});
cucumber_1.When('enter tenet Id {string}', function (EmailId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.emailId.sendKeys(EmailId);
    });
});
cucumber_1.When('Enter Automation story {string}', function (AutomationStorty) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.automationStory.sendKeys(AutomationStorty);
    });
});
cucumber_1.When('click on check box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.checkProcessListAsList.click();
    });
});
cucumber_1.When('Enter lIst size {string}', function (ListSize) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.enterListSize.sendKeys(ListSize);
    });
});
cucumber_1.When('Click on save and configure button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objChannelConfiguration.saveAndConfigure.click();
    });
});
cucumber_1.Then('Channel created successfully is shown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(protractor_1.element(protractor_1.by.xpath('//div[text()=""]'))), 100000);
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
        yield ObjAddUser.btnAddUser.click();
    });
});
cucumber_1.When('Click on Select User', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ObjAddUser.LstSelectUser.click();
        yield protractor_1.element(protractor_1.by.className("ng-tns-c18-13 smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1")).sendKeys('Kishor Macharla');
        yield protractor_1.element(protractor_1.by.xpath('//span[text()="Kishor Macharla(UST,I..."]')).click();
    });
});
cucumber_1.When('select role', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ObjAddUser.rdoSelectRole.click();
    });
});
cucumber_1.When('Add user details', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ObjAddUser.btnAddUserDetails.click();
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
        yield ObjAddUser.btnInstall.click();
    });
});
cucumber_1.Then('Project must be installed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.element(protractor_1.by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
        yield protractor_1.browser.objLogIn.btnLogOut.click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdEluc3RhbGxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1N0ZXBfRGVmaW5pdGlvbnMvUHJvamVjdEluc3RhbGxhdGlvbi9Qcm9qZWN0SW5zdGFsbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFDbkUsMkNBQWlGO0FBQ2pGLGdEQUF3QjtBQUN4QixtREFBZ0Q7QUFDaEQsdUVBQW1FO0FBQ25FLHVEQUFvRDtBQUNwRCwrRUFBdUU7QUFDdkUsaUZBQThFO0FBRTlFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNwRSxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksUUFBUSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDM0IsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUM3QyxJQUFJLFVBQVUsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUMvQixJQUFJLGdCQUFnQixHQUFHLElBQUksb0NBQWMsRUFBRSxDQUFDO0FBQzVDLElBQUksdUJBQXVCLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBR3pELGdCQUFLLENBQUMsNkNBQTZDLEVBQUUsVUFBZ0IsR0FBRzs7UUFDdEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztZQUNuRCxDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUFBLENBQUMs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