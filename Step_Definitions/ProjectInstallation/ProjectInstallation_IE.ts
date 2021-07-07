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

Given('ITOps Installation Engineer is in the home page, {string}, {string}', async function (usernameData, passwordData) {

  await browser.get(browser.params.url);
  await objLogIn.LogIn_Details(usernameData, passwordData)

 

});

// Project Details

When('Installation Engineer clicks on create project button', async function () {
  await objProjectListing.ClickOnProjectCreateButton();
});



When('Installation Engineer enters project name as {string}', async function (ProjectName) {
  await objProjectConfi.Projectname(ProjectName)
  TestProjectName = ProjectName;
});



When('Installation Engineer enters description as {string}', async function (Description) {
  await objProjectConfi.ProjectDescription(Description)
});



When('Installation Engineer clicks on create button', async function () {
  await objProjectConfi.Create()
});


// General Configuration
When('Installation Engineer enters Service now hostname as {string}', async function (ServiceNowHost) {
  await objProjectConfi.ServiceNowHost(ServiceNowHost)
});



When('Installation Engineer enters Service now Username as {string}', async function (ServiceNowUserName) {
  await objProjectConfi.ServiceUsername(ServiceNowUserName)
});



When('Installation Engineer enters Service now Password as {string}', async function (ServicenowPassword) {
  await objProjectConfi.ServicePassword(ServicenowPassword)
});



When('Installation Engineer enters Response SLA Threshold Count as {string}', async function (ThresholdCount) {
  await objProjectConfi.ThresholdCount(ThresholdCount)
});



When('Installation Engineer enters ITSM Name as {string}', async function (ITSMName) {
  await objProjectConfi.ITSMname(ITSMName)
});



When('Installation Engineer enters ITSM Version as {string}', async function (ITSMVersion) {
  await objProjectConfi.ITSMversion(ITSMVersion)
});



When('Installation Engineer selects ITSM TimeZone as {string}', async function (ITSMTimeZone) {
  var myElement = objProjectConfi.drpTimeZone;
    await  browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.TimeZone(ITSMTimeZone)
});



When('Installation Engineer selects ITIops Flavor as {string}', async function (ITIopsFlavor) {
  await objProjectConfi.ITOPsflavour(ITIopsFlavor)
});



When('Installation Engineer clicks on Save button in General Configuration page', async function () {
  await objProjectConfi.SaveGeneralConfig()
});




// Schedular configuration

When('Installation Engineer clicks on Schedular configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  var myElement = objProjectConfi.lnkSchedularConfiguration;
  await  browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.SchedularConfiguration()
});



When('Installation Engineer selects Schedule Interval for Correlation as {string}', async function (Correlation) {
  
  await objProjectConfi.CorrelationInterval(Correlation)

});



When('Installation Engineer selects Scheduler Interval for auto closure of flap clusters as {string}', async function (AutoClosure) {
  
  await browser.executeScript('window.scrollTo(0,800);').then(async function () {
    await browser.wait(EC.visibilityOf(objProjectConfi.drpClusterInterval), 100000);
    await objProjectConfi.ClusterInterval(AutoClosure)
  });
});



When('Installation Engineer select Scheduler Interval for alert analytics as {string}', async function (AlertAnalytics) {
  await browser.wait(EC.visibilityOf(objProjectConfi.drpAnalyticsInterval), 100000);
  await objProjectConfi.AnalyticsInterval(AlertAnalytics)
});



When('Installation Engineer select Scheduled interval for Batch Prediction as {string}', async function (BatchPrediction) {
  await browser.wait(EC.visibilityOf(objProjectConfi.drpPredictionInterval), 100000);
  await objProjectConfi.PredictionInterval(BatchPrediction)


});



When('Installation Engineer clicks on Save button in Scheduler Configuration page', async function () {
  await objProjectConfi.SaveSchedularConfig()
});




// Error Response Configuration

When('Installation Engineer clicks on Error Response Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.ErrorResponseConfiguration()
});



When('Installation Engineer enters From Email Account as {string}', async function (FromEmail) {
  await objProjectConfi.FromEmail(FromEmail)
});



When('Installation Engineer enters From Email Acount Password as {string}', async function (FromEmailAcountPassword) {
  await objProjectConfi.PasswordFromEmail(FromEmailAcountPassword)
});



When('Installation Engineer enters To Email Address as {string}', async function (ToEmail) {
  await objProjectConfi.ToEmail(ToEmail)
});



When('Installation Engineer clicks on Save button in Error Response Configuration page', async function () {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.SaveErrorConfig()
  })
});


// Surge Configuration

When('Installation Engineer clicks on Surge Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await  objProjectConfi.SurgeConfiguration()
});



When('Installation Engineer enters Surge Start Percentile as {string}', async function (StartPercentile) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await  objProjectConfi.SurgeStartPercentile(StartPercentile)
  })
});



When('Installation Engineer enters Surge Start Percentile Threshold as {string}', async function (StartPercentileThreshold) {
  await objProjectConfi.SurgeStartPercentileThreshold(StartPercentileThreshold)
});


When('Installation Engineer enters Surge End Percentile as {string}', async function (EndPercentile) {
  await objProjectConfi.SurgeEndPercentile(EndPercentile)
});



When('Installation Engineer enters Surge End Percentile Threshold as {string}', async function (EndPercentileThreshold) {
  await objProjectConfi.SurgeEndPercentileThreshold(EndPercentileThreshold)
});


When('Installation Engineer enters Surge Patterns as {string}', async function (SurgePatterns) {
  await objProjectConfi.SurgePatterns(SurgePatterns)
});


When('Installation Engineer enters Surge Pattern Match Threshold as {string}', async function (SurgePatternMatchThreshold) {
  await objProjectConfi.SurgePatternMatchThreshold(SurgePatternMatchThreshold)
});


When('Installation Engineer enters Surge Analytics Interval as {string}', async function (SurgeAnalyticsInterval) {
  await objProjectConfi.SurgeAnalyticsInterval(SurgeAnalyticsInterval)
});



When('Installation Engineer enters Surge First Run Count as {string}', async function (SurgeFirstRunCount) {
  await  objProjectConfi.SurgeFirstRunCount(SurgeFirstRunCount)
});



When('Installation Engineer enters Surge First Run Count Interval as {string}', async function (SurgeFirstRunCountInterval) {
  await  objProjectConfi.SurgeFirstRunCountInterval(SurgeFirstRunCountInterval)
});
When('Installation Engineer clicks on Save button in Surge Configuration page', async function () {
  await objProjectConfi.SaveSurgeConfiguration()
});



// Ticket Dump Configuration

When('Installation Engineer clicks on Ticket Dump Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.TicketDumpConfiguration()
});



When('Installation Engineer enters Ticket Dump Source Hostname as {string}', async function (Hostname) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.TicketDumpSourceHostname(Hostname)
  })
});



When('Installation Engineer enters Ticket Dump Source File Path as {string}', async function (FilePath) {
  await objProjectConfi.DumpSourceFilePath(FilePath)
});



When('Installation Engineer enters Source Username as {string}', async function (SourceUsername) {
  await objProjectConfi.SourceUsername(SourceUsername)
});



When('Installation Engineer enters Source Password as {string}', async function (SourcePassword) {
  await objProjectConfi.SourcePassword(SourcePassword)
});



When('Installation Engineer enters Ticket Number Column Name in dump file as {string}', async function (TicketNumberColumnName) {
  await objProjectConfi.TicketNumberColumnNameInDumpFile(TicketNumberColumnName)
});



When('Installation Engineer enters Work Notes column name in column file as {string}', async function (WorkNotesColumnName) {
  await objProjectConfi.WorkNotesColumnNameInColumnFile(WorkNotesColumnName)
});


When('Installation Engineer enters Short Description column name in dump file as {string}', async function (ShortDescriptionColumnName) {
  await objProjectConfi.ShortDescriptionColumnNameInDumpFile(ShortDescriptionColumnName)
});



When('Installation Engineer enters Category column name in dump file as {string}', async function (CategoryColumnName) {
  await objProjectConfi.CategoryColumnNameInDumpFile(CategoryColumnName)
});



When('Installation Engineer enters Sub Category column name in dump file as {string}', async function (SubCategoryColumnName) {
  await objProjectConfi.SubCategoryColumnNameInDumpFile(SubCategoryColumnName)
});

When('Installation Engineer enters Long Description column name in dump file as {string}', async function (LongDescription) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    
    await objProjectConfi.LongDescriptionColumnName(LongDescription)
  })
})

When('Installation Engineer clicks on Save button in Ticket Dump Configuration page', async function () {
  await objProjectConfi.SaveTicketConfig()
});



// Channel Configuration

When('Installation Engineer clicks on Channel Configuration', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.executeScript('window.scrollTo(0,0);').then(async function () {

  });
  await objProjectConfi.channelConfiguration()
});



When('Installation Engineer Clicks on create new Channel', async function () {
  await objProjectConfi.CreateNewChannel()
});



When('Installation Engineer enter Channel Name {string}', async function (ChannelName) {
  await objProjectConfi.ChannelName(ChannelName)
});



When('Installation Engineer Selects channel type as {string}', async function (ChannelType) {
  await objProjectConfi.channelType(ChannelType)
});



When('Installation Engineer selects channel integration type as {string}', async function (ChannelIntegration) {
  await objProjectConfi.ChannelIntegrationType(ChannelIntegration)
});



When('Installation Engineer enters Email Id as {string}', async function (EmailId) {
  await objProjectConfi.EmailId(EmailId)
});



When('Installation Engineer enters Client Id as {string}', async function (ClientID) {
  await objProjectConfi.ClientId(ClientID)
});



When('Installation Engineer enters Client secret Id as {string}', async function (ClientSecret) {
  await objProjectConfi.ClientSecret(ClientSecret)
});



When('Installation Engineer enters Tenant Id as {string}', async function (TenantID) {
  await objProjectConfi.TenantId(TenantID)
});



When('Installation Engineer clicks on check box', async function () {
  await objProjectConfi.CheckProcessListAsList()
});



When('Installation Engineer enters lIst size as {string}', async function (ListSize) {
  await objProjectConfi.EnterListSize(ListSize)
});



When('Installation Engineer clicks on Save and Configure button', async function () {
  await objProjectConfi.SaveAndConfigure()
});


When('Installation Engineer clicks on authenticate', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.ClickOnAuthenticate();
});



When('Installation Engineer selects account {string}', async function (EmailId) {
  await objProjectConfi.EnterMailId(EmailId);
});



When('Installation Engineer clicks next', async function () {
  await objProjectConfi.ClickNext();
});



When('Installation Engineer enters Password {string}', async function (Password) {
  await browser.wait(EC.visibilityOf(element(by.name("Password"))), 100000);
  await objProjectConfi.EnterPassword(Password);

});



When('Installation Engineer clicks on sign in', async function () {
  await objProjectConfi.SignIn();
});



//AddUser
When('Installation Engineer is in Add User page', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await objProjectConfi.AddUser();
 
});

When('Installation Engineer selects user as {string}', async function (UserName) {
  //await objProjectConfi.SelectUser(UserName);

  await element(by.xpath('//h3[text()="Add User"]//following::fieldset/div/span')).click()
  await element(by.className('ng-tns-c18-13 smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1')).sendKeys("Kishor Mac")
  await element(by.xpath('//h3[text()="Add User"]//following::div/ul//following-sibling::smo-dropdownitem/li')).click()
});



When('Installation Engineer selects role as {string}', async function (Role) {
  await objProjectConfi.Role(Role);
});



When('Installation Engineer clicks on Add User button', async function () {
  await objProjectConfi.AddUserDetails();
});




//ProjectInstallation
When('Installation Engineer clicks on Install button', async function () {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objProjectConfi.Install()
  })
});


