import { ElementFinder, element, by, browser } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();
var data = require('../../JSONFiles/SolarWindAlerts.json');
var strdata = JSON.stringify(data);



export class PushingAlerts {


  txtUserName = element(by.name("username"));
  txtPassword = element(by.name("password"));
  btnClickOnSignIn = element(by.xpath('//input[@value="Login"]'));
  btnfilter = element(by.xpath('//input[@type="text"]'));
  btncheckbox = element(by.xpath('//input[@type="checkbox"]'));
  btnclickOnProject = element(by.xpath('//a[text()="1.879.ProjectTeam.exchange"]'));
  btnclickOnBindings = element(by.xpath('//h2[text()="Bindings"]'));
  btnenterToQueue = element(by.xpath('//h3[text()="Add binding from this exchange"]//following::input[@type="text"]'));
  btnclickOnPublishMessage = element(by.xpath('//h2[text()="Publish message"]'));
  btnenterRoutingKey = element(by.xpath('//h2[text()="Publish message"]//following::input[@name="routing_key"]'));
  btnenterPayLoad = element(by.xpath('//textarea[@name="payload"]'));
  btnclickOnPublish = element(by.xpath('//input[@value="Publish message"]'))
  btnlogin = element(by.name("login"))
  btnselectProject = element(by.xpath('//h3[text()=" TestIBProjectt "]'))
  btnselectAlerts = element(by.xpath('//a[text()="Alerts"]'))


  async LogIn_Details2(adminUserName: string, adminPassword: string) {
    await this.txtUserName.sendKeys(adminUserName)
    await this.txtPassword.sendKeys(adminPassword)
  }
  async ClickOnSignIn() {
    await this.btnClickOnSignIn.click();
  }
  async filter(ProjectName: string) {
    await this.btnfilter.sendKeys(ProjectName);
  }
  async checkbox() {
    await this.btncheckbox.click();
  }
  async clickOnProject() {
    await this.btnclickOnProject.click();
  }
  async clickOnBindings() {
    await this.btnclickOnBindings.click();
  }
  async enterToQueue(ToQueue: string) {
    await this.btnenterToQueue.sendKeys(ToQueue);
  }
  async clickOnPublishMessage() {
    await this.btnclickOnPublishMessage.click();
  }
  async enterRoutingKey(RouteKey: string) {
    await this.btnenterRoutingKey.sendKeys(RouteKey);
  }
  async enterPayLoad() {
    await this.btnenterPayLoad.sendKeys(strdata);
  }
  async clickOnPublish() {
    await this.btnclickOnPublish.click();
  }
}


