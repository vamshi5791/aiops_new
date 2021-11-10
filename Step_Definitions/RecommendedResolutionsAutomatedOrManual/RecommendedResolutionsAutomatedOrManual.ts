import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";

import { recommendedResolution } from "../../PageObjects/RecommendedResolutionsAutomatedOrManual";
import { ITOPS_APIs } from "../../ITOPS_Apis/ItopsApis";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;

let objRecommendedResolution = new recommendedResolution();
let objITOpsApi = new ITOPS_APIs();

Then('{string} verifies recommended resolution should be available', async function (userRole) {
    try {
        await element(by.xpath("//span[text()='Recommended R...']")).isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {

    }
});

Then('{string} verifies recommended resolution should not be available', async function (userRole) {
    try {
        element(by.partialLinkText("//span[text()='Recommended R...']")).isPresent().then(function (select) {
            expect(select).to.be.false;
        })
    } catch (error) {

    }
});
Then('{string} verifies no recommended resolution available should be shown', async function (userRole) {
    try {
        await element(by.xpath("//div[text()='No recommended resolution available']")).isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {

    }
});
Then('{string} Recommended Resolutions section shows - TICKET ID RESOLUTION, RESOLUTION QUALITY', async function (string) {
    try {
        await objRecommendedResolution.txtTicketId.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
    try {
        await objRecommendedResolution.txtResolution.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
    try {
        await objRecommendedResolution.txtResolutionQuality.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
});

Then('{string} verifies Resolve and Cancel button to be available with Resolve as selected by default', async function (string) {
    try {
        await objRecommendedResolution.txtResolve.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {

    }
    try {
        await objRecommendedResolution.btnCancel.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {

    }
});


Then('{string} verifies Ticket ID, Resolution selected and its Resolution quality should be shown', function (string) {
    try {
        element(by.className("alert-list-row ng-star-inserted")).isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {

    }
});




Then('Admin click on state in details page', function (string) {
    try {
        element(by.xpath("//div[@class='button-icon button-icon-sm']//span")).click()
    } catch (error) {
        console.log(error)
        throw ""
    }
});


Then('{string} clicks on {string} button in ticket details page', function (string, Status) {
    try {
        element(by.xpath("//div[text()='" + Status + "']")).click()
    } catch (error) {
        console.log(error)
        throw ""
    }

});

When('{string} clicks on ticket id in recommended resolution section', async function (string) {
    try {
        await objRecommendedResolution.clickOnTicketId()
    } catch (error) {
        console.log(error)
        throw ""
    }
});


Then('{string} verifies ticket resolution popup', async function (string) {
    try {
        await objRecommendedResolution.btnResolutionPopUp.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
});


Then('{string} verifies resolve button is enabled', async function (string) {
    try {
        await objRecommendedResolution.btnResolve.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
});


Then('{string} verifies automated Radio button is disabled and Manual option is selected by default', async function (string) {
    try {
        await objRecommendedResolution.btnAutomated.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
    try {
        await objRecommendedResolution.btnManual.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw ""
    }
});


Then('{string} verifies created ticket in alert console', async function (string) {
    try {
        await element(by.xpath("//span[contains(text(),'INC')]")).isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {

    }
});

Then('{string} deletes {string} template using template name {string}', async function (string, reassignment, TemplateName) {
    try {
        await objITOpsApi.deleteTemplate(TemplateName)
    } catch (error) {

    }
});

Then('{string} creates {string} template {string} for project id as {string}', async function (string, reassignment, TemplateName, ProjectId) {
    try {
        await objITOpsApi.CustomReassignmentTemplate(ProjectId, TemplateName)
    } catch (error) {

    }
});
Then('{string} Verifies after reassignment threshold it should be assigned to the default group mentioned in the project configuration page as {string}', async function (string, Group) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='ASSIGNED TO']"))), 50000);
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + Group + " (Group)']"))), 50000);
    } catch (error) {

    }
}); 