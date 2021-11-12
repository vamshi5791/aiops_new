import { Then } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();


Then('Verify Green Up arrow against Device Name', async function () {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtUp), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to Verify Green Up arrow against Device Name "
    }

});

Then('{string} verifies the Resource Type column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtResourcetype), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Resource Type column"
    }
});


Then('{string} verifies the Resource Group column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtResourcegroup), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Resource Group column"
    }


});


Then('{string} verifies the IP Address column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtIPAddress), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the IP Address column"
    }


});



Then('{string} verifies the Mac address column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMacAddress), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Mac address column"
    }


});


Then('{string} verifies the Vendor column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtVendor), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Vendor column"
    }


});


Then('{string} verifies the Model column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtModel), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Model column"
    }


});


Then('{string} verifies the Maintanence Mode column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMaintanenceMode), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Maintanence Mode column"
    }


});


Then('{string} verifies the Country column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtCountry), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Country column"
    }


});


Then('{string} verifies the Site column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtSite), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Site column"
    }


});


Then('{string} verifies the Region column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtRegion), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Region column"
    }


});


Then('{string} verifies the Critical column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtCritical), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Critical column"
    }


});


Then('{string} verifies the Warning column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtWarning), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to  verifies the Warning column"
    }


});


Then('{string} verifies the Ok column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtOk), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Ok column"
    }


});

Then('{string} verifies the Major column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMajor), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Major column"
    }


});


Then('{string} verifies the Minor column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMinor), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Minor column"
    }


});


Then('{string} verifies the Info column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtInfo), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Info column"
    }


});


Then('{string} verifies the Total column', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtTotal), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Total column"
    }


});


Then('{string} verifies the Alert Name column in Device Availability', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//th[text()=' Alert Name ']"))), 10000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Alert Name column in Device Availability"
    }


});


Then('{string} verifies the Mtbf column in Device Availability', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtModel), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Mtbf column in Device Availability"
    }


});


Then('{string} verifies the Port column in Connections', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtModel), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to verifies the Port column in Connections"
    }


});


Then('{string} verifies the Dest Hostname column in Connections', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtModel), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to  verifies the Dest Hostname column in Connections"
    }


});

Then('{string} verifies the Status column in Connections', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objInfrastructurePage.txtModel), 100000);

    } catch (error) {
        await console.log("Action Name : Verifying device details ")
        await console.log(error)
        throw "Admin unable to  verifies the Status column in Connections"
    }


});