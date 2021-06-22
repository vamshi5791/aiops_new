import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjestListing } from '../../PageObjects/ProjectListing'
import { ProjectConfig } from "../../PageObjects/ProjectConfiuration";
import { dropdowns } from "../../support/dropdown";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;

let objLogIn = new LogIn();
let objProjectList = new ProjestListing();
let objConfiguration = new ProjectConfig();


Given('LogIn with ITOps role is available {string}', async function (url) {
  await browser.get(properties.get('main.url')).then(async function () {
  })
})

When('enter Username, Password and click on login button {string}, {string}', async function (usernameData, passwordData) {
  await objLogIn.txtUserName.sendKeys(usernameData);
  await objLogIn.txtPassword.sendKeys(passwordData);
  await objLogIn.btnClickOnSignIn.click();
});

//Project creation 

When('click on create project', async function () {
    await objProjectList.clickOnCreateProject.click();
});
  
  When('Enter project name {string}', async function (projectname) {
    await objConfiguration.projectname.sendKeys(projectname);
  });

  When('Enter description {string}', async function (description) {
    await objConfiguration.description.sendKeys(description);   
  });

  When('Click on create button', async function () {
    await objConfiguration.btnCreate.click();
  });
  
  Then('user is taken to the project configuration page', async function () {
   await browser.wait(EC.invisibilityOf(element(by.className("smo-progress-spinner-circle"))), 100000);
      await  browser.element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
       await objProjectList.btnLogOut.click();
  });
  Then('user is taken to the project configuration', async function () {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="Project Created Succesfully"]'))), 100000);

    await element(by.xpath('//div[text()="Project Created Succesfully"]')).getText().then(function (text) {
      console.log(text);
      expect(text).to.include('Project Created Succesfully');  
    });
    await browser.wait(EC.elementToBeClickable(element(by.id("textInput_0_2_0"))), 100000);
  });

//General configuration

  When('enter ConfigDetails {string}, {string}, {string}, {string}, {string}, {string}', async function (ServiceNowHost, serivceUname, servicePwd, thresholdCount, TestITSM, ITSMversion) {
        
        await objConfiguration.txtServiceNowHost.clear().then(function() {
          objConfiguration.txtServiceNowHost.sendKeys(ServiceNowHost);
        })
        await objConfiguration.txtServiceUsername.clear().then(function() {
          objConfiguration.txtServiceUsername.sendKeys(serivceUname);
        })
        await objConfiguration.pwdServicePassword.clear().then(function() {
          objConfiguration.pwdServicePassword.sendKeys(servicePwd);
        })
        await objConfiguration.txtThresholdCount.clear().then(function() {
          objConfiguration.txtThresholdCount.sendKeys(thresholdCount);
        })
        await objConfiguration.txtITSMname.clear().then(function() {
          objConfiguration.txtITSMname.sendKeys(TestITSM);
        })
        await objConfiguration.txtITSMversion.clear().then(function() {
          objConfiguration.txtITSMversion.sendKeys(ITSMversion);
        })
    });

    When('select ITSM TimeZone {string}', async function (ITSMTimeZone) {
      await browser.executeScript('window.scrollTo(0,200);').then(function () {
      })
 

      var drp = new dropdowns(objConfiguration.drpTimeZone);
      await drp.selectByVisibleText(ITSMTimeZone)
   
    });
  
    When('select ITOps Flavor {string}', async function (ITOpsFlavor) {
      await browser.executeScript('window.scrollTo(0,200);').then(function () {
      })
      var drp = new dropdowns(objConfiguration.drpITOPsflavour);
      await drp.selectByVisibleText(ITOpsFlavor)
    });

  When('click save general config button', async function () {
    await browser.executeScript('window.scrollTo(0,200);').then(function () {
   }) 
    await objConfiguration.btn_saveGeneralConfig.click();
      });
Then('verify Success message for General Configuration must be shown as a toaster', async function () {
  await browser.wait(EC.elementToBeClickable(element(by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
     await element(by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
       expect(text).to.include('Project Configurations Updated');
     });
});
   

//Schedular configuration


 When('click on Schedular configuration', async function () {
   await objConfiguration.lnkSchedularConfiguration.click();
  
});
When('select correlation interval duration {string}', async function (Correlation) {
  var drp = new dropdowns(objConfiguration.correlationInterval);
      await drp.selectByVisibleText(Correlation)
  
});
When('select cluster interval duration {string}', async function (AutoClosure) {
    await browser.executeScript('window.scrollTo(0,450);').then(async function () {
      var drp = new dropdowns(objConfiguration.clusterInterval);
      await drp.selectByVisibleText(AutoClosure)

    })
  await browser.executeScript('window.scrollTo(0,500);').then(function () {
  })
 });
When('select analytics duration {string}', async function (AlertAnalytics) {
  await browser.executeScript('window.scrollTo(0,700);').then(async function () {
    var drp = new dropdowns(objConfiguration.analyticsInterval);
    await drp.selectByVisibleText(AlertAnalytics)

 
  })
 });
When('select prediction duration {string}', async function (BatchPrediction) {
  await browser.executeScript('window.scrollTo(0,800);').then(async function () {
    var drp = new dropdowns(objConfiguration.predictionInterval);
    await drp.selectByVisibleText(BatchPrediction)
  
  })
  await browser.executeScript('window.scrollTo(0,1000);').then(async function () {
  })
 });
 When('click save schedule config button', async function () {
     await objConfiguration.btnSaveSchedularConfig.click();
 });

 Then('verify Success message for Schedular Configuration must be shown as a toaster', async function () {
  await browser.wait(EC.elementToBeClickable(element(by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
     await browser.sleep(2000)
     await element(by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
       console.log(text);
       expect(text).to.include('Project Configurations Updated');
     });
})

//Error Responce Configuration

When('click on Error Responce Configuration', async function () {
  await objConfiguration.lnkErrorConfiguration.click();
});  

When('enter fromemail {string}', async function (frommailid) {
  await browser.executeScript('window.scrollTo(0,300);').then(async function () {
    await objConfiguration.txtServiceNowHost.clear().then(async function() {
    await objConfiguration.txtFromEmail.sendKeys(frommailid);
    })
  })
});

When('enter emailPassword {string}', async function (pwdfrommailid) {
  await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.pwdFromEmail.sendKeys(pwdfrommailid);
});
});
When('enter toemail {string}', async function (pwdfrommailid) {
  await browser.executeScript('window.scrollTo(0,800);').then(function () {
  })
  await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtToEmail.sendKeys(pwdfrommailid);
});
});

When('click save Error config button', async function () {
    await objConfiguration.btnSaveErrorConfig.click();
});
Then('verify Success message for Error Responce Configuration must be shown as a toaster', async function () {

  await browser.wait(EC.elementToBeClickable(element(by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
     await browser.sleep(2000)
     await element(by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
       console.log(text);
       expect(text).to.include('Project Configurations Updated');
     });
})

//Ticket Dump Configuration

When('click on Ticket Dump Configuration', async function () {
  await objConfiguration.lnkDumpConfiguration.click();
});
When('enter Ticket Dump Source Hostname {string}', async function (hostname) {
  await browser.executeScript('window.scrollTo(0,800);').then(function () {
  })
  await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtTicketDumpSourceHostname.sendKeys(hostname);
});
});
When('enter Dump Source File Path {string}', async function (filepath) {
  await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtDumpSourceFilePath.sendKeys(filepath);
});
});
  When('enter Source Username {string}', async function (SUname) {
    await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtSourceUsername.sendKeys(SUname);
});
});
    When('enter Source Password {string}', async function (Upassword) {
      await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtSourcePassword.sendKeys(Upassword);
});
});
      When('enter Ticket number column name in dump file {string}', async function (dumpfile) {
        await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtTicketNumberColumnNameInDumpFile.sendKeys(dumpfile);
});
});
        When('enter Work Notes column name in column file {string}', async function (columnfile) {
          await objConfiguration.txtServiceNowHost.clear().then(async function() {
      await objConfiguration.txtWorkNotesColumnNameInColumnFile.sendKeys(columnfile);
          });
        });
          When('enter Short Description column name in dump file {string}', async function (dumpfile) {
            await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtShortDescriptionColumnNameInDumpFile.sendKeys(dumpfile);
});
});
            When('enter Category column name in dump file {string}', async function (dumpfile) {
  
  await browser.executeScript('window.scrollTo(0,300);').then(function () {
       })
       await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtCategoryColumnNameInDumpFile.sendKeys(dumpfile);
});
});
              When('enter Sub Category column name in dump file {string}', async function (dumpfile) {
                await objConfiguration.txtServiceNowHost.clear().then(async function() {
       await objConfiguration.txtSubCategoryColumnNameInDumpFile.sendKeys(dumpfile);
});
});
When('click save ticket dump config button', async function () {
  await objConfiguration.btnSaveTicketConfig.click();
});

Then('Success message for Ticket Dump Configuration must be shown as a toaster', async function () {
  await browser.wait(EC.elementToBeClickable(element(by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
     await browser.sleep(2000)
     await element(by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
       console.log(text);
       expect(text).to.include('Project Configurations Updated');
     });
})


//Channel Configuration

      When('Click on Channel Configuration', async function () {
     await browser.executeScript('window.scrollTo(0,0);').then(async function(){
     
     });
     await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Channel Configuration"]'))), 100000);
          await objConfiguration.channelConfiguration.click(); 
         });

   
         When('Click on create new Channel', async function () {
          await objConfiguration.createNewChannel.click();
         });

  
         When('Enter channel name {string}', async function (channelName) {
          await objConfiguration.channelName.sendKeys(channelName);
         });

   
         When('Click on Select channel type {string}', async function (ChannelType) {
           var drp = new dropdowns(objConfiguration.channelType);
           await drp.selectByVisibleText(ChannelType)
         });

         When('Select channel integration type {string}', async function (ChannelIntegration) {
           var drp = new dropdowns(objConfiguration.channelIntegrationType);
           await drp.selectByVisibleText(ChannelIntegration)
         })
   

         When('enter Email Id {string}', async function (EmailId) {
           await objConfiguration.emailId.sendKeys(EmailId);
         });
         When('enter Client Id {string}', async function (ClientId) {
          await objConfiguration.clientId.sendKeys(ClientId);
         });
         When('enter secret Id {string}', async function (secretId) {
          await objConfiguration.clientSecret.sendKeys(secretId);
         });
         When('enter tenet Id {string}', async function (tenetId) {
          await objConfiguration.tenantId.sendKeys(tenetId);
        });
         When('Enter Automation story {string}', async function (AutomationStorty) {
          await objConfiguration.automationStory.sendKeys(AutomationStorty);
         });

   
         When('click on check box', async function () {
          await objConfiguration.checkProcessListAsList.click(); 
         });

         When('Enter lIst size {string}', async function (ListSize) {
          await objConfiguration.enterListSize.sendKeys(ListSize);
         });


         When('Click on save and configure button', async function () {
          await objConfiguration.saveAndConfigure.click();
         });

Then('Channel created successfully is shown', async function () {
  await browser.wait(EC.elementToBeClickable(element(by.xpath('//div[text()="Project Configurations Updated"]'))), 100000);
  await element(by.xpath('//div[text()="Project Configurations Updated"]')).getText().then(function (text) {
    console.log(text);
    expect(text).to.include('Project Configurations Updated');
  }); 
         })

//Add User

When('click on Add User', async function () {
  await browser.executeScript('window.scrollTo(0,0);').then(async function(){
  });
        await objConfiguration.btnAddUser.click();
       });
 
  When('Click on Select User {string}', async function (UserName) {
         await objConfiguration.LstSelectUser.click(); 
         await element(by.className("ng-tns-c18-13 smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1")).sendKeys(UserName);
    await element(by.xpath('//span[text()="Kishor Macharla(UST,I..."]')).click();
       });
 
  When('select role', async function () {
       await  objConfiguration.rdoSelectRole.click();
       });
 
 When('Add user details', async function () {
        await objConfiguration.btnAddUserDetails.click();
       });
 
Then('User must be added and listed in the below list', async function () {
  await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="User added."]'))), 100000);
  await element(by.xpath('//div[text()="User added."]')).getText().then(function (text) {
    console.log(text);
    expect(text).to.include('User added.');
  }); 
})

 When('Click on Install', async function () {
  await browser.wait(EC.invisibilityOf(element(by.xpath('//div[text()="User added."]'))), 100000);
  await browser.executeScript('window.scrollTo(0,200);').then(function () {
     
  })
   
   await objConfiguration.btnInstall.click();
   
 })

Then('Project must be installed', async function () {
  await  browser.element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
       await objProjectList.btnLogOut.click();
 })