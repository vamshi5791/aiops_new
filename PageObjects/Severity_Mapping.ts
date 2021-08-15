import { ElementFinder, element, by, promise, browser,protractor } from "protractor";

export class SeverityMapping {


    btnSeverityMapping=element(by.xpath('//div[text()="Severity Mapping"]'))
    btnAddNewSource=element(by.xpath('//span[text()=" Add New Source"]'))
    btnChooseSource=element(by.xpath('//span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'))
    txtSourceSeverity=element(by.xpath('//input[@placeholder="Source Severity *"]'))
    btnChooseSOSeverity=element(by.xpath('//label[text()="Choose SO Severity *"]'))
    btnSelectInformation=element(by.xpath('//span[text()="Information"]'))
    btnSelectSolarWinds=element(by.xpath('//span[text()="Solarwinds"]'))
    btnClickOnPlusButton=element(by.xpath('//span[@class="smo smo-add-new icon ng-star-inserted"]'))
    txtNextSouceSeverity=element(by.xpath("//span[@class='smo smo-add-new icon ng-star-inserted']//preceding::input[@class='smo-inputtext smo-input-padding smo-input-padding-sm ng-untouched ng-pristine ng-invalid ui-inputtext ui-corner-all ui-state-default smo-widget border-radius-sm']"))
    btnNextChooseSOSeverity=element(by.xpath("//span[@class='smo smo-add-new icon ng-star-inserted']//preceding::label[text()='Choose SO Severity *']"))
    btnAddSource=element(by.xpath('//span[text()="Add Source"]'))
    btnAddSeverity=element(by.xpath('//b[text()="SOLARWINDS"]//following::span[@class="cursor-pointer ng-star-inserted"]'))
    btnDropDownForSaveAndNew=element(by.xpath('//span[@class="smo smo-expand-more-alt ng-star-inserted"]'))
    btnClickOnSaveAndAddNew=element(by.xpath('//div[text()="Save and Add New"]'))
    btnSelectCritical=element(by.xpath('//span[text()="Critical"]'))
    btnClickOnSave=element(by.xpath('//div[text()="Save"]'))
    txtLabel=element(by.xpath("//span[text()='When severity is not available, please enter 'Empty' as Source Severity']"))
    btnEdit=element(by.xpath('//span[@class="smo smo-create-alt edit-icon cursor-pointer right-padding-20 ng-star-inserted"]'))
    btnSave=element(by.xpath('//span[text()="Save"]'))
    btnClickONYes=element(by.xpath('//button[@class="smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-active-ms smo-button-text-only"]'))
    txtDate=element(by.xpath('//b[text()="14 Jul 2021"]'))
    btnConfiguration=element(by.xpath('//a[text()="Configuration"]'))
    btnCancel=element(by.xpath('//span[text()="Cancel"]'))



    async SeverityMapping() { 
      await browser.sleep(2000);
      await this.btnSeverityMapping.click();
    }
    async Cancel() { 
      await this.btnCancel.click();
    }
    async Configuration() { 
      await this.btnConfiguration.click();
    }
    async AddNewSource() { 
        await this.btnAddNewSource.click();
      }
      async ChooseSource() { 
        await this.btnChooseSource.click();
      }
      async SourceSeverity(SourceSeverity1:string) { 
        await this.txtSourceSeverity.clear();
        await this.txtSourceSeverity.sendKeys(SourceSeverity1);
      }
      async ChooseSOSeverity() { 
        await this.btnChooseSOSeverity.click();
      }
      async SelectInformation() { 
        await this.btnSelectInformation.click();
      }
      async SelectSolarWinds() { 
        await this.btnSelectSolarWinds.click();
      }
      async ClickOnPlusButton() { 
        await this.btnClickOnPlusButton.click();
      }
      async NextSouceSeverity(SourceSeverity2:string) { 
        await this.txtNextSouceSeverity.sendKeys(SourceSeverity2);
      }
      async NextChooseSOSeverity() { 
        await this.btnNextChooseSOSeverity.click();
      }
      async AddSource() { 
        await this.btnAddSource.click();
      }
      async AddSeverity() { 
        await this.btnAddSeverity.click();
      }
      async DropDownForSaveAndNew() { 
        await this.btnDropDownForSaveAndNew.click();
      }
      async ClickOnSaveAndAddNew() { 
        await this.btnClickOnSaveAndAddNew.click();
        await browser.sleep(5000);
      }
      async SelectCritical() { 
        await this.btnSelectCritical.click();
      }
      async ClickOnSave() { 
        await this.btnClickOnSave.click();
      }
      async Label() { 
        await this.txtLabel.click();
      }
      async Edit() { 
        await element(by.xpath('//td[@class="action-btn-tr col-width-1 align-r"]')).click();
        await browser.sleep(5000);
        await this.btnEdit.click();
      }
      async Save() { 
        await this.btnSave.click();
      }
      async ClickONYes() { 
        await this.btnClickONYes.click();
      }
      async Date() { 
        await this.txtDate.click();
      }


}
