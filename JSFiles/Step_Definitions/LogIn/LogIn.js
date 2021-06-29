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
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = protractor_1.browser.ExpectedConditions;
var fs = require('fs');
var expect = chai_1.default.expect;
let objLogIn = new LogIn_1.LogIn();
let ProjectListing = new ProjectListing_1.ProjectListingPage();
cucumber_1.Given('Given User with ITOps role renders the URL', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(properties.get('main.url')).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
cucumber_1.When('enters Username, Password and click on Login button {string}, {string}', function (UserName, Password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objLogIn.LogIn_Details(UserName, Password);
    });
});
cucumber_1.Then('ITOps home page is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.getTitle().then(function (txtTitle) {
            expect(txtTitle).to.include('Itops');
        });
    });
});
cucumber_1.When('click on logout button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ProjectListing.ClickOnProfile();
        yield ProjectListing.LogOut();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nSW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TdGVwX0RlZmluaXRpb25zL0xvZ0luL0xvZ0luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFDbkUsMkNBQWlGO0FBQ2pGLGdEQUF3QjtBQUN4QixtREFBZ0Q7QUFDaEQscUVBQXNFO0FBR3RFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUMzRSxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksUUFBUSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDM0IsSUFBSSxjQUFjLEdBQUcsSUFBSSxtQ0FBa0IsRUFBRSxDQUFDO0FBR3JDLGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ3BELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDbkQsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNGLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFSCxlQUFJLENBQUMsd0VBQXdFLEVBQUUsVUFBZ0IsUUFBUSxFQUFFLFFBQVE7O1FBQ2hILE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyw4QkFBOEIsRUFBRTs7UUFDckMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVWLGVBQUksQ0FBQyx3QkFBd0IsRUFBRTs7UUFDckIsTUFBTSxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdkMsTUFBTSxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9