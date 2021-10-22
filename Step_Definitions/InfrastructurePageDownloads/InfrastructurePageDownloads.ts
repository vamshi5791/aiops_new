import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
var objApiRabbitMQ = new ApiRabbitMQ()
var fs = require('fs');
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();
var Global_ProjectName;
var userName;


         When('{string} opens infrastructure page ', async function (userName) {
          try {
            await browser.wait(EC.visibilityOf(objInfrastructurePage.btnInfrastructure),10000);
            await objInfrastructurePage.Infrastructure()
            await browser.wait(EC.visibilityOf(objInfrastructurePage.tblInfrastructure), 10000);
            } catch (error) {
            console.log("Feature name : Infrastructure page Files Download " + userName + " and Action name : opens infrastructure page ")
            console.log(error)
            throw "User is not able to open infrastructure page"
            }
         });


         When('{string} clicks on Download Device Inventory icon', async function (userName) {
          try {
            //user clicks on Download Device inventory icon
            await browser.wait(EC.visibilityOf(objInfrastructurePage.btnDeviceInventoryDownload), 10000);
            await objInfrastructurePage.btnDeviceInventoryDownload.click();
            } catch (error) {
            console.log("Feature name : Infrastructure page Files Download " + userName + " and Action name : Download Device Inventory icon ")
            console.log(error)
            throw "User is not able to Download Device Inventory icon"
            }
         });



         Then('{string} clicks on Download Topology icon', async function (userName) {
          try {
            //user navigates to Topology page  
            await browser.wait(EC.visibilityOf(objInfrastructurePage.btnTopology),10000);
            await objInfrastructurePage.Topology()
            await browser.wait(EC.visibilityOf(objInfrastructurePage.tblTopology), 10000);
           
            //user clicks on Download Device inventory icon
            await browser.wait(EC.visibilityOf(objInfrastructurePage.btnTopologyDownload), 10000);
            await objInfrastructurePage.btnTopologyDownload.click();
            await browser.wait(EC.visibilityOf(objInfrastructurePage.tblTopology), 10000);
            
          } catch (error) {
            console.log("Feature name : Infrastructure page Files Download " + userName + " and Action name : Download Topology icon ")
            console.log(error)
            throw "User is not able to Download Topology icon"
            }
         });