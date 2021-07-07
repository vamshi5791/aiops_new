
import { After, AfterAll, Before, BeforeAll, Status } from "cucumber";
import { browser } from "protractor";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');



Before(async function () {
  browser.waitForAngularEnabled(false);
  
});
BeforeAll(async function () {
  //await browser.restart();
});
//screenshots for scenarios

After(async function (scenario) {

  if (scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");
  }
  else
    if (scenario.result.status === Status.PASSED) {
      if (properties.get('main.Required_screenshot') == true) {
        const screenshot = await browser.takeScreenshot();

        this.attach(screenshot, "image/png");
      }
    }


});
// After(async function (feature) {
//   await browser.close();
// });

// AfterAll(async function () {
//   await browser.close();
// });



