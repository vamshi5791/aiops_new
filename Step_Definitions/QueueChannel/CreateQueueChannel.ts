import { When, Then } from "cucumber"
import { browser, element, by, protractor } from "protractor"
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from '../../PageObjects/ProjectListing';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import chai from "chai";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();
let objProjectConfi = new ProjectConfiguration();
var fetch = require("node-fetch");
const { async } = require("q");
var ChannnelNameText;
var Global_ProjectName
var fs = require('fs');


When('{string} with Username as {string}, Password as {string}, Creates Queue Channel with channelName as {string}, for the project {string} with projectId {string}', async function (userRole, username, password, channelName, projectName, projectID) {
  ChannnelNameText = channelName;

  var JSONTestData = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8'));

  var userInfo =JSONTestData.UserInfo;

  var channelInfo = JSONTestData.ChannelInfo;

  const token_URL = properties.get("main." + globalThis.environment + "_token_URL");
  const tokenPostRequest = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  await fetch(token_URL, tokenPostRequest).then(res => res.json()).then(res => {

    if (true) {
      return Promise.resolve(res);
    }
    else {
      return Promise.reject(res);
    }
  }).then(async function (userData) {
 
    var bearerToken = "Bearer " + userData.access_token;

    const chennalCreation_URL = properties.get("main." + globalThis.environment + "_ihubservice");
    const channelCreationPosrRequest = {
      method: 'POST',
      body: JSON.stringify(channelInfo),
      headers: {
        'Content-Type': 'application/json',
        'organization-key': '1',
        'Authorization': bearerToken,
        'user': 'Itops_admin_new',
        'organization-name': 'ustglobal',
      }
    };
    await fetch(chennalCreation_URL, channelCreationPosrRequest)
      .then(response => response.json()).then(data => {
      }).catch((error) => {
        console.error('Error:', error);
      });
  }).catch(function (error) {
    console.warn(error);
  });
});


When('{string} enters project name as {string} in the search field', async function (userRole, projectName) {
  try {
    await objProjectListing.Project_search(projectName);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    Global_ProjectName = projectName;
  }
  catch (error) {
   
    await console.log(error)
    throw "IE is unable to enter project name in project search field"
  }
});

When('{string} clicks dot menu icon', async function (userRole) {
  try {
    await browser.sleep(3000)
    await objProjectListing.ThreeDots(Global_ProjectName);
  }
  catch (error) {
   
    console.log(error);

    throw "User is not able to click Three dot menu"
  }
});

When('{string} clicks edit Project', async function (userRole) {
  try {
    await objProjectListing.EditProject()
  }
  catch (error) {
   
    await console.log(error)
    throw "User is not able to click Edit Project"
  }

});

When('{string} clicks on channel configuration', async function (userRole) {
  try {
    await browser.sleep(3000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Channel Configuration"]'))), 100000);
    await objProjectConfi.channelConfiguration();
  }
  catch (error) {
  
    await console.log("Feature name : Channel configuration with  " + userRole + " and Scenario name : Channel configuration")
    await console.log(error)
    throw "User is not able to click on Channel Configuration"
  }
});

Then('new Queue channel must be available in Channel configuration page', async function () {
  try {
    await element(by.xpath('//h3[text()="' + ChannnelNameText + '"]')).getText().then(function (text) {
      expect(text).to.include(ChannnelNameText);
    });
  }
  catch (error) {
  
    await console.log("Feature name : Create Queue Channel and Scenario name : Create Queue Channel")
    await console.log(error)
    throw "Newly created channel name should be displayed in list. But the new queue channel is not exist"
  };
});