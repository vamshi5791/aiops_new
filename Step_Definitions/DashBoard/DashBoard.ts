import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { Dashboard } from "../../PageObjects/Dashboard";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
import { ApiRabbitMQ } from '../../PageObjects/ApiRabbitMQ';

let objAlertsTableData = new AlertConsoleTableData();
var moment = require("moment");
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();
let objectDashboard = new Dashboard();
let objApiRabbitMQ = new ApiRabbitMQ()
var MTBFdata;
var alertData;


//ITOPS Dashboard - verify Top 10 Alerts widget

When('{string} navigate to dashboard section', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objectDashboard.btnDashboard), 10000);
    await browser.wait(EC.elementToBeClickable(objectDashboard.btnDashboard), 10000);
    await browser.wait(EC.presenceOf(objectDashboard.btnDashboard), 10000);
    await objectDashboard.clickOnDashboard()
  } catch (error) {
    console.log("Navigating to dashboard section")
    console.log(error)
    throw "unable to navigate to Dashboard section"
  }
});

When('{string} selects rows per page as {string}', async function (string, NoOfRows) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        console.log("No Pages in alert console")
      } else {
        await objAlerts.selectNoOfRows(NoOfRows)
      }
    });

  } catch (error) {
    console.log("selecting rows per page")
    console.log(error)
    throw "unable to select rows per page"
  }
});

When('{string} gets the number of {string} in alert console page {string}', async function (string, string2, AlertName) {

  await browser.sleep(5000);
  var i = 1
  this.pageRowCount = 0;
  await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);
  await objAlertsTableData.getTableDataRowCount().then(async (pageRowCount) => {
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
    this.tableRowCount = pageRowCount;
    console.log("tableData lenth: 0" + this.tableRowCount);
  });

  i++;
  var isNextPageAvailable = "";
  await objAlertsTableData.isElementIsDisplayed().then((visible) => {
    return this.isNextPageAvailable = visible;
  });

  await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " before while " + i);
  while (this.isNextPageAvailable) {
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " before elementToBeClickable " + i);
    await browser.wait(EC.elementToBeClickable(objAlerts.nextArrayButton), 30000);
    await browser.sleep(500);
    objAlerts.nextArrayButton.click();
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);

    await objAlertsTableData.getTableDataRowCount().then(async (pageRowCount) => {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
      this.tableRowCount = this.tableRowCount.concat(pageRowCount);
      console.log("tableData lenth: 1 " + this.tableRowCount);

    });
    i++;
    await objAlertsTableData.isElementIsDisplayed().then((visible) => {
      this.isNextPageAvailable = visible;
    });
  }
  await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " after while " + this.tableRowCount);

});


When('{string} gets alert name from Top Alerts', async function (string) {
  try {
    await element(by.className('alert-message')).getText().then(async function (AlertNameFromDashboard) {
      alertData = AlertNameFromDashboard;
    })
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("finding number of same alerts in alerts page")
    console.log(error)
    throw "unable to get number of alerts in alerts page"
  }

});
When('{string} enters alert name', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await objAlerts.Alert_Search(alertData);
  } catch (error) {
    console.log("Feature Name : Search Functionality : Alert Page - Entering " + alertData + " in search field box")
    console.log(error);
    throw "User not able to enter in search box field in alert page"
  }

});


When('{string} selects alert state as {string}', async function (string, Alert_State) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.drpSource), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.drpAlertState), 10000);
    await objAlerts.AlertState(Alert_State);
  } catch (error) {
    console.log("finding number of same alerts in alerts page")
    console.log(error)
    throw "unable to get number of alerts in alerts page"
  }

});


When('{string} verifies the total open alerts count using project id as {string}', async function (string, ProjectID) {
  try {
    var totalAlertCount = await objApiRabbitMQ.openTicketsServName(ProjectID);

    await element(by.className('apexcharts-text apexcharts-datalabel-value')).getText().then(async function (totalAlertCountFromDashboard) {
      await expect(totalAlertCountFromDashboard).to.include(totalAlertCount);
    })

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying total open alerts count in dashboard")
    console.log(error)
    throw "invalid total count"
  }

});
Then('{string} verifies Alert count should match in both Top {string} Alerts widget and Alert index', async function (string, string1) {
  try {
    await element(by.xpath('//div[@class="alert-message"]//following::td')).getText().then(async (text) => {
      await expect(text).to.include(this.tableRowCount);
    })
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("Alert count")
    console.log(error)
    throw "Alert count Does't match Alert count"
  }
});

//Dashboard - Alerts-Open vs closed

When('{string} selects Alert State as {string}', async function (string, AlertState) {

  try {
    await browser.sleep(5000)
    await objAlerts.AlertState(AlertState);
  } catch (error) {
    console.log("selecting Alert state")
    console.log(error)
    throw "unable to select state"
  }
});


Then('{string} verifies that the widget {string} is available in the dashboard', async function (string, WidgetTitle) {

  try {
    await element(by.xpath("//span[text()='" + WidgetTitle + "']")).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Alerts-open vs closed is available in the dashboard")
    console.log(error)
    throw "Alerts-open vs closed widget is not available in the dashboard"
  }
});

Then('{string} comes out of the dashboard frame', async function (string) {
  try {
    await browser.switchTo().defaultContent();
  } catch (error) {
    console.log(error)
  }
});
Then('{string} moves to the dashboard frame', async function (string) {
  try {
    //Dashboard taking much time to load
    await browser.sleep(30000)
    await browser.switchTo().frame(element(by.xpath('//iframe[@sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts allow-downloads"]')).getWebElement());
  } catch (error) {
    console.log("Moving to dashboard frame")
    console.log(error)
    throw "Unable to move to dashboard frame"
  }
});
Then('{string} verifies the date filter is {string} by default', async function (string, string2) {
  try {
    await element.all(by.xpath('//span[text()="Last 14 days"]')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifies the date filter")
    console.log(error)
    throw "the default date filter is not available"
  }
});


Then('{string} verifies the total alert count', async function (string) {

  try {
    await console.log("''''''''''''''''''''''''''''''''", this.tableRowCount)
    var openalerts = this.tableRowCount;
    await console.log("''''''''''''''''''''''''''''''''", openalerts)
    await console.log("''''''''''''''''''''''''''''''''", typeof (openalerts))
    await browser.wait(EC.visibilityOf(element(by.partialLinkText("'" + openalerts + "'"))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the total alert count")
    console.log(error)
    throw "total count not equal"
  }
});

Then('{string} verifies the Open cluster count is {string} and closed cluster count is {string}', async function (string, OpenClusters, ClosedClusters) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + OpenClusters + '"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + ClosedClusters + '"]'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the Open cluster count")
    console.log(error)
    throw "cluster cluster count doesn't match"
  }
});

When('{string} selects a severity as {string} and source as {string} and make sure only data related to that are displayed -open vs closed', async function (UserRole, Severity, Source) {
  try {
    await objectDashboard.clickOnSeverity(Severity)
    await objectDashboard.clickOnSource(Source)
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("selecting Alert state")
    console.log(error)
    throw "unable to select Severity"
  }
});

// Dashboard - Mean time to repair

Then('{string} X axis value must be date fields', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('apexcharts-xaxis'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying X axis value must be date fields")
    console.log(error)
    throw "X axis doesn't have date fields"
  }
});


Then('{string} Y axis values left side incidents', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('apexcharts-yaxis-texts-g'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying Y axis values left side incidents")
    console.log(error)
    throw "Y axis doesn't have incidents"
  }
});


Then('{string} Y Axis values right side average time', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('apexcharts-yaxis-texts-g'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying Y axis values right side average time")
    console.log(error)
    throw "Doesn't have Y Axis values right side average time"
  }
});
// Dashboard -Resolution SLA

Then('{string} verifies that Hours selection option is present in the widget', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="Hour"]'))), 10000);
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the Hours selection option is available in the dashboard")
    console.log(error)
    throw "unable to find hour selection option"
  }
});

Then('{string} verifies the dropdown has {string} to {string} numbers', async function (string, string2, string3) {
  try {
    var myElement = element(by.id('comboA'));
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.id('comboA')).click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="1"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="2"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="3"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="4"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="5"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="6"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="7"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="8"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="9"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//option[text()="10"]'))));

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the dropdown is having 1 to 10 numbers")
    console.log(error)
    throw "Dropdown doesn't have 1 to 10 numbers"
  }
});

//Dashboard- Source device mapping

Then('{string} Column names should be {string} and {string}', async function (string, HostName, Count) {
  try {
    await element.all(by.xpath('//th[text()="' + HostName + '"]')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
    await element.all(by.xpath('//th[text()="' + Count + '"]')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying host name and count")
    console.log(error)
    throw "Hostname and count columns doesn't exist"
  }
});
//Verify Dashboard widget - Alert Pattern
When('{string} selects date more than one month', async function (string) {
  try {
    await element(by.xpath('//span[text()="Last 14 days"]')).click();
    var myElement = element(by.xpath('//span[text()="Last 30 days"]'));
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await myElement.click();
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("selecting date more than one month")
    console.log(error)
    throw "unable to select date"
  }
});



Then('{string} verifies Date should be on X axis and Alert names on Y axis.', async function (string) {
  try {
    await element.all(by.xpath('//div[@class="heatmap-panel"]')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
    await element.all(by.xpath('//div[@class="heatmap-legend-wrapper"]')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await browser.switchTo().defaultContent();
    await console.log("verifying  Date should be on X axis and Alert names on Y axis")
    console.log(error)
    throw " Date not on X axis and Alert names on Y axis"
  }
});

Then('{string} clicks on a device name', async function (string) {
  try {
    await objectDashboard.clickOnHostName();

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Source device mapping is available in the dashboard")
    console.log(error)
    throw "Source device mapping is not available in the dashboard"
  }
});


Then('{string} verifies Title of popup should be {string}', async function (string, string2) {
  try {
    await browser.wait(EC.visibilityOf(objectDashboard.txtTicketDetailsTitle));

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Source device mapping is available in the dashboard")
    console.log(error)
    throw "Source device mapping is not available in the dashboard"
  }
});


Then('{string} verifies left side should include label {string}', async function (string, string2) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="MTBF for Top Alerts"]'))));

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Source device mapping is available in the dashboard")
    console.log(error)
    throw "Source device mapping is not available in the dashboard"
  }
});


Then('{string} verifies right side should include label {string}', async function (string, string2) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="Total Alerts : "]'))));

  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Source device mapping is available in the dashboard")
    console.log(error)
    throw "Source device mapping is not available in the dashboard"
  }
});


Then('{string} verifies column headings should be {string}, {string}, {string}', async function (string, string2, string3, string4) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="Alert Name"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="Count"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="Resolution"]'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    console.log("verifying the widget Source device mapping is available in the dashboard")
    console.log(error)
    throw "Source device mapping is not available in the dashboard"
  }
});
When('{string} gets device name from the widget for project id as {string}', async function (string, projectId) {
  try {
    await objectDashboard.btnHostName.getText().then(async function (deviceName) {
      MTBFdata = await objectDashboard.deviceAvailability(projectId, deviceName);
    });
  } catch (error) {
    await browser.switchTo().defaultContent();
    await console.log(error);
    throw "unable to get device name"
  }
});
When('{string} verifies the MTBF calculation result', async function (string) {
  try {
    var value = MTBFdata[0].mtbf;
    value = value.split(' ')
    var MTBFInHours = value[0] / 60;
    await browser.wait(EC.visibilityOf(element(by.xpath('//td[text()="' + MTBFInHours + '"]'))));
  } catch (error) {
    await browser.switchTo().defaultContent();
    await console.log(error)
    throw "wrong MTBF calculation"
  }
});