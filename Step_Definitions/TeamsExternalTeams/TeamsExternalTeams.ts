import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { DisplayConfiguration } from "../../PageObjects/DisplayConfiguration";
let objDisplayConfig = new DisplayConfiguration();
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;


When('{string} clicks on external Teams', async function (string) {
    try {
        await objDisplayConfig.clickOnExternalTeams()
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='External Teams']"))), 100000);
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


When('{string} selects source as {string} in external Teams', async function (string, SourceName) {
    try {
        await objDisplayConfig.selectSource(SourceName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});
When('{string} clicks on choose a group dropdown', async function (string) {
    try {
        await objDisplayConfig.clickOnChooseGroup()
    } catch (error) {
        await console.log(error)
        throw ""
    }
});

When('{string} search for a group as {string} in external Teams', async function (string, GroupName) {
    try {
        await objDisplayConfig.searchForGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});
When('{string} clicks on import button in external teams', async function (string) {
    try {
        await browser.sleep(2000)
        await objDisplayConfig.clickOnImportGroup()
    } catch (error) {
        await console.log(error)
        throw ""
    }
});

When('{string} verifies all the groups having {string} should be displayed', async function (string, FieldName) {
    try {
        await objDisplayConfig.verifyingFields(FieldName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


When('{string} selects group in external Teams {string}', async function (string, GroupName) {
    try {
        await objDisplayConfig.selectGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});



When('{string} clicks on all groups dropdown', async function (string) {
    try {
        await objDisplayConfig.clickOnAllGroup()
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


When('{string} searches for a group as {string} in external Teams', async function (string, GroupName) {
    try {
        await objDisplayConfig.searchForAllGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


When('{string} selects group in external Teams as {string}', async function (string, GroupName) {
    try {
        await objDisplayConfig.selectGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} verifies Search option to be available', async function (string) {
    try {
        await objDisplayConfig.btnSearch.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} verifies Refresh option to be available', async function (string) {
    try {
        await objDisplayConfig.btnRefresh.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw ""
    }
});
Then('{string} verifies import button should not be available', async function (string) {
    try {
        await objDisplayConfig.btnImportGroup.isPresent().then(function (select) {
            expect(select).to.be.false;
        });
    } catch (error) {
        await console.log(error)
        throw ""
    }
});

Then('{string} clicks on sort button', async function (string) {
    try {
        await objDisplayConfig.clickOnSort()
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} verifies user list should be sorted alphabetically', async function (string) {
    try {

    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} searches for user in search box as {string}', async function (string, UserName) {
    try {
        await objDisplayConfig.searchForGroup(UserName)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});

Then('{string} verifies sort option to be available', async function (string) {
    try {
        await objDisplayConfig.btnSort.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} verifies Refresh option should not be available', async function (string) {
    try {
        await objDisplayConfig.btnRefresh.isPresent().then(function (select) {
            expect(select).to.be.false;
        });
    } catch (error) {
        await console.log(error)
        throw ""
    }
});


Then('{string} verifies user matching search should be displayed and his group also should be shown', async function (string) {
    try {

    } catch (error) {
        await console.log(error)
        throw ""
    }
});


//splitting tickets 

Then('{string} selects {string} alert checkbox from pop up', async function (string, checkBoxNumber) {
    try {
        await objDisplayConfig.splittingTickets(checkBoxNumber)
    } catch (error) {
        await console.log(error)
        throw ""
    }
});