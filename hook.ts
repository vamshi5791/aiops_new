
import {After,AfterAll,Before, BeforeAll, Status} from "cucumber";
import { browser } from "protractor";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/data.properties');


//screenshots for scenarios
Before( async function () {
  browser.waitForAngularEnabled(false);
await browser.manage().window().maximize();
});



After(async function(scenario) {
  
  if (scenario.result.status=== Status.FAILED )
  {
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }
  else
    if (scenario.result.status === Status.PASSED)
    {
      if (properties.get('main.Required_screenshot') == true)
      {
        const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
        }
      }


});





