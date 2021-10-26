import { ElementFinder, element, by, promise, browser, protractor } from "protractor";

export class InfrastructurePage {

  btnTopology = element(by.xpath('//span[@class="smo-menuitem-icon smo smo-topology-tree ng-star-inserted"]'))
  tblTopology = element(by.className("row pt-2"))
  txtTopologySearch=element(by.xpath('//input[@placeholder="Search"]'))
  btnImport = element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-upload-regular smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))
  btnDelete = element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))
  btnInfrastructure = element(by.xpath('//a[text()="Infrastructure"]'))
  tblInfrastructure = element(by.className("smo-table-expandable smo-widget smo-table-ms ng-star-inserted"))
  btnDeviceInventoryDownload = element(by.className("smo smo-download"))
  btnTopologyDownload = element(by.className("smo-btn-icon-col d-flex align-items-center smo smo-download smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"))
  btnUpload = element(by.xpath('//span[@class="smo-button-icon-left smo-clickable fa fa-upload"]'))
  txtSearch = element(by.xpath('//input[@placeholder="Search"]'))
  btnClickOnYes = element(by.xpath('//span[text()="Yes"]'))
  btnAddDevice = element(by.xpath('//span[text()="Add Device"]'))
  txtEnterResourceName = element(by.xpath('//input[@placeholder="Resource Name"]'))
  txtEnterResourceType = element(by.xpath('//input[@placeholder="Resource Type"]'))
  txtEnterSite = element(by.xpath('//input[@placeholder="Site"]'))
  txtEnterCountry = element(by.xpath('//input[@placeholder="Country"]'))
  txtEnterRegion = element(by.xpath('//input[@placeholder="Region"]'))
  btnBackToInfrastructure=element(by.xpath('//a[text()="Infrastructure"]'))
  btnAddDeviceTOList = element(by.xpath('//span[@class="smo smo-close-black-alt"] //following::span[text()="Add Device"]'))
  txtEditResourceType = element(by.xpath('//div[text()="RESOURCE TYPE"]//following::input[@type="text"]'))
  btnUpdateDevice = element(by.xpath('//span[text()="Update Device"]'))
  btnFailOverDevice = element(by.xpath('//label[text()="Select failover device"]'))
  drpFailOverDevice = element(by.xpath('//div[text()="FAILOVER DEVICE"]//following::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'))
  btnConfigureColumns = element(by.xpath('//span[@class="smo smo-settings-regular"]'))
  btnIPAdress = element(by.xpath('//label[text()="IP Address"]'))
  btnMacAddress = element(by.xpath('//label[text()="Mac Address"]'))
  btnVendor = element(by.xpath('//label[text()="Vendor"]'))
  btnMaintenanceMode = element(by.xpath('//label[text()="Maintenance Mode"]'))
  btnSite = element(by.xpath('//label[text()="Site"]'))
  btnCancel = element(by.xpath('//span[text()="Cancel"]'))
  txtMacAdress = element(by.xpath('//th[text()=" Mac Address "]'))

  // ------------------Milestone3------------ 

  browseFile = element(by.xpath('//*[@id="smo-container"]/div/app-infrastructure/div/div[2]/app-network-topology/div/div[2]/smo-modal[2]/div/div/div[2]/div/div/smo-fileupload/div/div[1]/div/span[2]/input'))
  btnUpload2 = element(by.xpath('//*[@id="smo-container"]/div/app-infrastructure/div/div[2]/app-network-topology/div/div[2]/smo-modal[2]/div/div/div[2]/div/div/smo-fileupload/div/div[2]/div/div/div/div[4]/span/button/span[1]'))
  txtResourceName = element(by.xpath('//div[text()="RESOURCE NAME"]'))
  txtResourcetype = element(by.xpath('//div[text()="RESOURCE TYPE"]'))
  txtResourcegroup = element(by.xpath('//div[text()="RESOURCE GROUP"]'))
  txtmodel = element(by.xpath('//div[text()="MODEL"]'))
  txtIPAddress = element(by.xpath('//div[text()="IP ADDRESS"]'))
  txtMacAddress = element(by.xpath('//div[text()="MAC ADDRESS"]'))
  txtVendor = element(by.xpath('//div[text()="VENDOR"]'))
  txtMaintanenceMode = element(by.xpath('//div[text()="MAINTENANCE MODE"]'))
  txtCountry = element(by.xpath('//div[text()="COUNTRY"]'))
  txtSite = element(by.xpath('//div[text()="SITE"]'))
  txtRegion = element(by.xpath('//div[text()="REGION"]'))
  txtCritical = element(by.xpath('//th[text()=" CRITICAL "]'))
  txtWarning = element(by.xpath('//th[text()=" WARNING "]'))
  txtOk = element(by.xpath('//th[text()=" OK "]'))
  txtMajor = element(by.xpath('//th[text()=" MAJOR "]'))
  txtMinor = element(by.xpath('//th[text()=" MINOR "]'))
  txtInfo = element(by.xpath('//th[text()=" INFO "]'))
  txtTotal = element(by.xpath('//th[text()=" TOTAL "]'))
  txtAlertName = element(by.xpath('//div[text()="MODEL"]'))
  txtMtbf = element(by.xpath('//div[text()="MODEL"]'))
  txtPort = element(by.xpath('//div[text()="MODEL"]'))
  txtDestHostname = element(by.xpath('//div[text()="MODEL"]'))
  txtStatus = element(by.xpath('//div[text()="MODEL"]'))
  txtUp = element(by.xpath('//span[text()="Up"]'))






  async Topology() {
    await this.btnTopology.click();
  }
  async FailOverDevice() {
    await this.btnFailOverDevice.click();
  }
  async UpdateDevice() {
    await this.btnUpdateDevice.click();
  }
  async IPAdress() {
    await this.btnIPAdress.click();
  }
  async MacAddress() {
    await this.btnMacAddress.click();
  }
  async Vendor() {
    await this.btnVendor.click();
  }
  async MaintenanceMode() {
    await this.btnMaintenanceMode.click();
  }
  async Site() {
    await this.btnSite.click();
  }
  async Cancel() {
    await this.btnCancel.click();
  }

  async ConfigureColumns() {
    await this.btnConfigureColumns.click();
  }
  async EditResourceType(EditResourceType: string) {
    await this.txtEditResourceType.sendKeys(EditResourceType);
  }

  async Import() {
    await this.btnImport.click();
  }
  async Delete() {
    await this.btnDelete.click();
  }
  async Infrastructure() {
    await this.btnInfrastructure.click();

  }
  async Upload() {
    await this.btnUpload.click();
  }
  async Search(DeviceName: string) {
    await browser.sleep(2000);
    await this.txtSearch.sendKeys(DeviceName);
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  async ClickOnYes() {
    await this.btnClickOnYes.click();
  }

  async ResourceName(ResourceName: string) {
    await element(by.xpath('//td[text()=" ' + ResourceName + ' "]')).click();
  }

  async AddDevice() {
    await this.btnAddDevice.click();
  }
  async EnterResourceName(ResourceName: string) {
    await this.txtEnterResourceName.sendKeys(ResourceName);
  }
  async EnterResourceType(ResourceType: string) {
    await this.txtEnterResourceType.sendKeys(ResourceType);
  }
  async EnterRegion(Region: string) {
    await this.txtEnterRegion.sendKeys(Region);
  }
  async EnterCountry(Country: string) {
    await this.txtEnterCountry.sendKeys(Country);
  }
  async EnterSite(Site: string) {
    await this.txtEnterSite.sendKeys(Site);
  }
  async AddDeviceTOList() {
    await this.btnAddDeviceTOList.click();
  }
}