import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from '../../PageObjects/ProjectListing';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();
let objProjectConfi = new ProjectConfiguration();
var customMsgEnabled = true;
var TestProjectName;

Given('ITOps Admin is in the home page, {string}, {string}', async function (usernameData, passwordData) {
 
  await browser.get(browser.params.url);
  await objLogIn.LogIn_Details(usernameData, passwordData)


});

// Project Details

When('admin clicks on create project button', async function () {
  await objProjectListing.ClickOnProjectCreateButton();
});



When('admin enters project name as {string}', async function (ProjectName) {
  await objProjectConfi.Projectname(ProjectName)
  TestProjectName = ProjectName;
});



When('admin enters description as {string}', async function (Description) {
  await objProjectConfi.ProjectDescription(Description)
});



When('admin clicks on create button', async function () {
  await objProjectConfi.Create()
});


Then('user is taken to the project configuration page {string}', async function (Toaster) {
 
  try {
   await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
   
   await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
   expect(text).to.include(Toaster);
   });
   } 
   catch (error) {
   if (customMsgEnabled == true) {
   var customError = ''
   customError = "Once user clicks on create button, user must be taken to project configuration page but it is not taking to Project Configuration Page"
   throw customError
   } 
   else {
   throw error
   }
  };
  });
// General Configuration
When('admin enters Service now hostname as {string}', async function (ServiceNowHost) {
 
  await objProjectConfi.ServiceNowHost(ServiceNowHost)
});



When('admin enters Service now Username as {string}', async function (ServiceNowUserName) {
  await objProjectConfi.ServiceUsername(ServiceNowUserName)
});



When('admin enters Service now Password as {string}', async function (ServicenowPassword) {
  await objProjectConfi.ServicePassword(ServicenowPassword)
});



When('admin enters Response SLA Threshold Count as {string}', async function (ThresholdCount) {
  await objProjectConfi.ThresholdCount(ThresholdCount)
});



When('admin enters ITSM Name as {string}', async function (ITSMName) {
  await objProjectConfi.ITSMname(ITSMName)
});



When('admin enters ITSM Version as {string}', async function (ITSMVersion) {
  await objProjectConfi.ITSMversion(ITSMVersion)
});



When('admin selects ITSM TimeZone as {string}', async function (ITSMTimeZone) {
  var myElement = objProjectConfi.drpTimeZone;
    await  browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.TimeZone(ITSMTimeZone)
});



When('admin selects ITIops Flavor as {string}', async function (ITIopsFlavor) {
  await objProjectConfi.ITOPsflavour(ITIopsFlavor)
});



When('admin clicks on Save button in General Configuration page', async function () {
  await objProjectConfi.SaveGeneralConfig()
});



Then('Success message for General Configuration must be shown  as a toaster {string}', async function (Toster) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Toster);
  });
});

// Schedular configuration

When('admin clicks on Schedular configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  var myElement = objProjectConfi.lnkSchedularConfiguration;
  await  browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.SchedularConfiguration()
});



When('admin selects Schedule Interval for Correlation as {string}', async function (Correlation) {
  
  await objProjectConfi.CorrelationInterval(Correlation)

});



When('admin selects Scheduler Interval for auto closure of flap clusters as {string}', async function (AutoClosure) {
  
  await browser.executeScript('window.scrollTo(0,800);').then(async function () {
    await objProjectConfi.ClusterInterval(AutoClosure)
  });
});



When('admin select Scheduler Interval for alert analytics as {string}', async function (AlertAnalytics) {
  await browser.wait(EC.visibilityOf(objProjectConfi.drpAnalyticsInterval), 100000);
  await objProjectConfi.AnalyticsInterval(AlertAnalytics)
});



When('admin select Scheduled interval for Batch Prediction as {string}', async function (BatchPrediction) {
  await browser.wait(EC.visibilityOf(objProjectConfi.drpPredictionInterval), 100000);
  await objProjectConfi.PredictionInterval(BatchPrediction)


});



When('admin clicks on Save button in Scheduler Configuration page', async function () {
  await objProjectConfi.SaveSchedularConfig()
});


Then('Success message for Scheduler Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });
// Error Response Configuration

When('admin clicks on Error Response Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.ErrorResponseConfiguration()
});



When('admin enters From Email Account as {string}', async function (FromEmail) {
  await objProjectConfi.FromEmail(FromEmail)
});



When('admin enters From Email Acount Password as {string}', async function (FromEmailAcountPassword) {
  await objProjectConfi.PasswordFromEmail(FromEmailAcountPassword)
});



When('admin enters To Email Address as {string}', async function (ToEmail) {
  await objProjectConfi.ToEmail(ToEmail)
});



When('admin clicks on Save button in Error Response Configuration page', async function () {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.SaveErrorConfig()
  })
});


Then('Success message for Error Response Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });
// Surge Configuration

When('Admin clicks on Surge Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await  objProjectConfi.SurgeConfiguration()
});



When('Admin enters Surge Start Percentile as {string}', async function (StartPercentile) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await  objProjectConfi.SurgeStartPercentile(StartPercentile)
  })
});



When('Admin enters Surge Start Percentile Threshold as {string}', async function (StartPercentileThreshold) {
  await objProjectConfi.SurgeStartPercentileThreshold(StartPercentileThreshold)
});


When('Admin enters Surge End Percentile as {string}', async function (EndPercentile) {
  await objProjectConfi.SurgeEndPercentile(EndPercentile)
});



When('Admin enters Surge End Percentile Threshold as {string}', async function (EndPercentileThreshold) {
  await objProjectConfi.SurgeEndPercentileThreshold(EndPercentileThreshold)
});


When('Admin enters Surge Patterns as {string}', async function (SurgePatterns) {
  await objProjectConfi.SurgePatterns(SurgePatterns)
});


When('Admin enters Surge Pattern Match Threshold as {string}', async function (SurgePatternMatchThreshold) {
  await objProjectConfi.SurgePatternMatchThreshold(SurgePatternMatchThreshold)
});


When('Admin enters Surge Analytics Interval as {string}', async function (SurgeAnalyticsInterval) {
  await objProjectConfi.SurgeAnalyticsInterval(SurgeAnalyticsInterval)
});



When('Admin enters Surge First Run Count as {string}', async function (SurgeFirstRunCount) {
  await  objProjectConfi.SurgeFirstRunCount(SurgeFirstRunCount)
});



When('Admin enters Surge First Run Count Interval as {string}', async function (SurgeFirstRunCountInterval) {
  await  objProjectConfi.SurgeFirstRunCountInterval(SurgeFirstRunCountInterval)
});
When('admin clicks on Save button in Surge Configuration page', async function () {
  await objProjectConfi.SaveSurgeConfiguration()
});



Then('Success message for Surge Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });
// Ticket Dump Configuration

When('admin clicks on Ticket Dump Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.TicketDumpConfiguration()
});



When('admin enters Ticket Dump Source Hostname as {string}', async function (Hostname) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.TicketDumpSourceHostname(Hostname)
  })
});



When('admin enters Ticket Dump Source File Path as {string}', async function (FilePath) {
  await objProjectConfi.DumpSourceFilePath(FilePath)
});



When('admin enters Source Username as {string}', async function (SourceUsername) {
  await objProjectConfi.SourceUsername(SourceUsername)
});



When('admin enters Source Password as {string}', async function (SourcePassword) {
  await objProjectConfi.SourcePassword(SourcePassword)
});



When('admin enters Ticket Number Column Name in dump file as {string}', async function (TicketNumberColumnName) {
  await objProjectConfi.TicketNumberColumnNameInDumpFile(TicketNumberColumnName)
});



When('admin enters Work Notes column name in column file as {string}', async function (WorkNotesColumnName) {
  await objProjectConfi.WorkNotesColumnNameInColumnFile(WorkNotesColumnName)
});


When('admin enters Short Description column name in dump file as {string}', async function (ShortDescriptionColumnName) {
  await objProjectConfi.ShortDescriptionColumnNameInDumpFile(ShortDescriptionColumnName)
});



When('admin enters Category column name in dump file as {string}', async function (CategoryColumnName) {
  await objProjectConfi.CategoryColumnNameInDumpFile(CategoryColumnName)
});



When('admin enters Sub Category column name in dump file as {string}', async function (SubCategoryColumnName) {
  await objProjectConfi.SubCategoryColumnNameInDumpFile(SubCategoryColumnName)
});

When('admin enters Long Description column name in dump file as {string}', async function (LongDescription) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    
    await objProjectConfi.LongDescriptionColumnName(LongDescription)
  })
})

When('admin clicks on Save button in Ticket Dump Configuration page', async function () {
  await objProjectConfi.SaveTicketConfig()
});




Then('Success message for Ticket Dump Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });
// Channel Configuration

When('admin clicks on Channel Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.executeScript('window.scrollTo(0,0);').then(async function () {

  });
  await objProjectConfi.channelConfiguration()
});



When('admin Clicks on create new Channel', async function () {
  await objProjectConfi.CreateNewChannel()
});



When('admin enter Channel Name {string}', async function (ChannelName) {
  await objProjectConfi.ChannelName(ChannelName)
});



When('admin Selects channel type as {string}', async function (ChannelType) {
  await objProjectConfi.channelType(ChannelType)
});



When('admin selects channel integration type as {string}', async function (ChannelIntegration) {
  await objProjectConfi.ChannelIntegrationType(ChannelIntegration)
});



When('admin enters Email Id as {string}', async function (EmailId) {
  await objProjectConfi.EmailId(EmailId)
});



When('admin enters Client Id as {string}', async function (ClientID) {
  await objProjectConfi.ClientId(ClientID)
});



When('admin enters Client secret Id as {string}', async function (ClientSecret) {
  await objProjectConfi.ClientSecret(ClientSecret)
});



When('admin enters Tenant Id as {string}', async function (TenantID) {
  await objProjectConfi.TenantId(TenantID)
});



When('Enter Automation story as {string}', async function (AutomationStory) {
  await objProjectConfi.AutomationStory(AutomationStory)
});



When('admin clicks on check box', async function () {
  await objProjectConfi.CheckProcessListAsList()
});



When('admin enters lIst size as {string}', async function (ListSize) {
  await objProjectConfi.EnterListSize(ListSize)
});



When('admin clicks on Save and Configure button', async function () {
  await objProjectConfi.SaveAndConfigure()
});




Then('Success message for Channel Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks Save&Configure button it should display Channel Created Successfully. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });
When('admin clicks on authenticate', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.ClickOnAuthenticate();
});



When('admin selects account {string}', async function (EmailId) {
  await objProjectConfi.EnterMailId(EmailId);
});



When('admin clicks next', async function () {
  await objProjectConfi.ClickNext();
});



When('admin enters Password {string}', async function (Password) {
  await browser.wait(EC.visibilityOf(element(by.name("Password"))), 100000);
  await objProjectConfi.EnterPassword(Password);

});



When('admin clicks on sign in', async function () {
  await objProjectConfi.SignIn();
});


Then('Success message for OAuth authentication must be shown as a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  throw customError
  } else {
  throw error
  }
 };
 });

//AddUser
When('admin is in Add User page', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.AddUser();
 
});

When('admin selects user as {string}', async function (UserName) {
  await objProjectConfi.SelectUser(UserName);


});



When('admin selects role as {string}', async function (Role) {
  await objProjectConfi.Role(Role);
});



When('admin clicks on Add User button', async function () {
  await objProjectConfi.AddUserDetails();
});



Then('User must be added and listed in the below list with a toaster {string}', async function (Toster) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(Toster);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once user clicks Add User button it should display selected user name in the list. But it is not displaying in the list"
  throw customError
  } else {
  throw error
  }
 };
 });

//ProjectInstallation
When('admin clicks on Install button', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.Install()
  })
});



Then('Project must be in ready state in Project Listring Page {string}', async function (ProjectStatus) {
  try {
  await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))), 100000);
  await browser.wait(EC.visibilityOf(element(by.xpath("//h3[text()=' " + TestProjectName + " ']//following::span[@class='smo-badge smo-badge-round smo-badge-sm smo-badge-ready-sm']"))), 180000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
  expect(text).to.include(ProjectStatus);
  });
  } catch (error) {
  if (customMsgEnabled == true) {
  var customError = ''
  customError = "Once project is installed, Ready should be display as status opposite to project name in the list. But it is not displaying in the list"
  throw customError
  } else {
  throw error
  }
 };
 });