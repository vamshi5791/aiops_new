import { ElementFinder, element, by, promise, browser, protractor } from "protractor";

export class InfrastructurePage {

    btnTopology=element(by.xpath('//span[@class="smo-menuitem-icon smo smo-topology-tree ng-star-inserted"]'))
    txtTopologySearch=element(by.xpath('//input[@placeholder="Search"]'))
    btnImport=element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-upload-regular smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))
    btnDelete=element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))
    btnInfrastructure=element(by.xpath('//a[text()="Infrastructure"]'))
    btnUpload=element(by.xpath('//span[@class="smo-button-icon-left smo-clickable fa fa-upload"]'))
    txtSearch=element(by.xpath('//input[@placeholder="Search"]'))
    btnClickOnYes=element(by.xpath('//span[text()="Yes"]'))
    btnAddDevice=element(by.xpath('//span[text()="Add Device"]'))
    txtEnterResourceName=element(by.xpath('//input[@placeholder="Resource Name"]'))
    txtEnterResourceType=element(by.xpath('//input[@placeholder="Resource Type"]'))
    txtEnterSite=element(by.xpath('//input[@placeholder="Site"]'))
    txtEnterCountry=element(by.xpath('//input[@placeholder="Country"]'))
    txtEnterRegion=element(by.xpath('//input[@placeholder="Region"]'))
    btnBackToInfrastructure=element(by.xpath('//a[text()="Infrastructure"]'))
    btnAddDeviceTOList=element(by.xpath('//span[@class="smo smo-close-black-alt"] //following::span[text()="Add Device"]'))
    txtEditResourceType=element(by.xpath('//div[text()="RESOURCE TYPE"]//following::input[@type="text"]'))
    btnUpdateDevice=element(by.xpath('//span[text()="Update Device"]'))
    btnFailOverDevice=element(by.xpath('//label[text()="Select failover device"]'))
    drpFailOverDevice=element(by.xpath('//div[text()="FAILOVER DEVICE"]//following::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'))


    async Topology() {
      await browser.sleep(2000);
        await this.btnTopology.click();
      }
      async FailOverDevice() {
        await this.btnFailOverDevice.click();
      }

      async UpdateDevice() {
        await this.btnUpdateDevice.click();
      }
      async EditResourceType(EditResourceType:string) {
        await this.txtEditResourceType.sendKeys(EditResourceType);
      }
      async TopologySearch() {
        await this.txtTopologySearch.click();
      }
      async Import() {
        await this.btnImport.click();
      }
      async Delete() {
        await this.btnDelete.click();
      }
      async Infrastructure() {
        // await element(by.className('smo smo-close-black-alt')).click();
        // await browser.sleep(5000)
        await this.btnInfrastructure.click();

      }
      async Upload() {
        await this.btnUpload.click();
      }
      async Search(DeviceName:string) {
        await browser.sleep(2000);
        await this.txtSearch.sendKeys(DeviceName);
        await browser.sleep(2000);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      }
      async ClickOnYes() {
        await this.btnClickOnYes.click();
      }

      // async device(Device:string){
      //   await element(by.xpath('//div[text()="'+Device+'"]')).click();
      // }
      async ResourceName(ResourceName:string) {
        await browser.sleep(2000);
        await element(by.xpath('//td[text()=" '+ResourceName+' "]')).click();
      }
      
      async AddDevice() {
        await this.btnAddDevice.click();
      }
      async EnterResourceName(ResourceName:string) {
        await this.txtEnterResourceName.sendKeys(ResourceName);
      }
      async EnterResourceType(ResourceType:string) {
        await this.txtEnterResourceType.sendKeys(ResourceType);
      }
      async EnterRegion(Region:string) {
        await this.txtEnterRegion.sendKeys(Region);
      }
      async EnterCountry(Country:string) {
        await this.txtEnterCountry.sendKeys(Country);
      }
      async BackToInfrastructure() {
        await this.btnBackToInfrastructure.click();

      }
      async EnterSite(Site:string) {
        await this.txtEnterSite.sendKeys(Site);
      }
      async AddDeviceTOList() {
        await this.btnAddDeviceTOList.click();
      }
}