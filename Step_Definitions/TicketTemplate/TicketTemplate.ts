import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { support } from '../../support/support';
import { Tickets } from '../../PageObjects/Tickets';
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
let objServiceNow = new ServiceNowAPI();
let objAlerts = new AlertsPage();
let objsupport = new support();
let objTicket = new Tickets()
let objApiRabbitMQ = new ApiRabbitMQ();
var expect = chai.expect;
var EC = browser.ExpectedConditions;
var TestTeamMember;
var resultState;


When('{string} sends an alert with source Forescout and alert message {string}, {string}, {string}', async function (string, ProjectName, routeKey, channelJson) {      
    
    await objApiRabbitMQ.apiPushMsgRabbitMQ(ProjectName, routeKey, channelJson);
  });


  Then('{string} verifies from service now, the details of new ticket created', function (string) {
   
  });


  Then('{string} verifies Description of the ticket should be as defined in template', function (string) {
 
  });


  Then('{string} verifies Short description of the ticket should be as defined in template', function (string) {        
  
  });



  Then('{string} verifies Comments of the ticket should be as defined in template', function (string) {
   
  });


  Then('{string} verifies Assigned To field value in the ticket should be as defined in template', function (string) {  
   
  });

  Then('{string} verifies Assignment Group of the ticket should be as defined in template', function (string) {
   
  });


  Then('{string} verifies Caller id of the ticket should be as defined in the template', function (string) {

  });



