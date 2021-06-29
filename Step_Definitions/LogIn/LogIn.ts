import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from "../../PageObjects/ProjectListing";


var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;

let objLogIn = new LogIn();
let ProjectListing = new ProjectListingPage();


         Given('User with ITOps role renders the URL', async function () {
          await browser.manage().window().maximize();
           await browser.get(properties.get('main.url')).then(async function () {
         })
         })

        When('user enters Username, Password and click on Login button {string}, {string}', async function (UserName, Password) { 
         await objLogIn.LogIn_Details(UserName, Password);
        });



        Then('ITOps home page is displayed', async function () {
        browser.getTitle().then(function (txtTitle) {
         expect(txtTitle).to.include('Itops');
        });  
        })
        
When('click on logout button', async function () {
          await ProjectListing.ClickOnProfile()
        await ProjectListing.LogOut();  
        })
