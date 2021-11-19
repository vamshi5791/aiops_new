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
        console.log(error)
        throw "Admin unable to verifies recommended resolution should be available"

    }
});

Then('{string} verifies recommended resolution should not be available', async function (userRole) {
    try {
        element(by.partialLinkText("//span[text()='Recommended R...']")).isPresent().then(function (select) {
            expect(select).to.be.false;
        })
    } catch (error) {
        console.log(error)
        throw "Recommended resolution is available"

    }
});
Then('{string} verifies no recommended resolution available should be shown', async function (userRole) {
    try {
        await element(by.xpath("//div[text()='No recommended resolution available']")).isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "recommended resolution available "

    }
});
Then('{string} Recommended Resolutions section shows - TICKET ID RESOLUTION, RESOLUTION QUALITY', async function (string) {
    try {
        await objRecommendedResolution.txtTicketId.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Admin unable to verify recommended Resolutions section shows - TICKET ID"
    }
    try {
        await objRecommendedResolution.txtResolution.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Admin unable to verify recommended Resolutions section shows - RESOLUTION"
    }
    try {
        await objRecommendedResolution.txtResolutionQuality.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Admin unable to verify recommended Resolutions section shows - RESOLUTION QUALITY"
    }
});

Then('{string} verifies Resolve and Cancel button to be available with Resolve as selected by default', async function (string) {
    try {
        await objRecommendedResolution.txtResolve.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Resolve button not available"
    }
    try {
        await objRecommendedResolution.btnCancel.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Cancel button not available"
    }
    try {
        await element(by.xpath('//span[@class="ticket-title"]//following::span[@class="match-score"]')).isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Resolve button not selected by default"
    }
});


Then('Admin click on state in details page', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='button-icon button-icon-sm']//span"))), 50000);
        await browser.wait(EC.presenceOf(element(by.xpath("//div[@class='button-icon button-icon-sm']//span"))), 50000);
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//div[@class='button-icon button-icon-sm']//span"))), 50000);
        await element(by.xpath("//div[@class='button-icon button-icon-sm']//span")).click()
    } catch (error) {
        console.log(error)
        throw "Admin unable to click on state in details page"
    }
});


Then('{string} clicks on {string} button in ticket details page', function (string, Status) {
    try {
        element(by.xpath("//div[text()='" + Status + "']")).click()
    } catch (error) {
        console.log(error)
        throw "Admin unable to clicks on status button in ticket details page"
    }

});

When('{string} clicks on ticket id in recommended resolution section', async function (string) {
    try {
        await objRecommendedResolution.clickOnTicketId()
    } catch (error) {
        console.log(error)
        throw "Admin unable to clicks on ticket id in recommended resolution section"
    }
});


Then('{string} verifies ticket resolution popup', async function (string) {
    try {
        await objRecommendedResolution.btnResolutionPopUp.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Admin unable to verifies ticket resolution popup "
    }
});


Then('{string} verifies resolve button is enabled', async function (string) {
    try {
        await objRecommendedResolution.btnResolve.isPresent().then(function (select) {
            expect(select).to.be.true;
        })
    } catch (error) {
        console.log(error)
        throw "Admin unable to verifies resolve button is enabled"
    }
});


Then('{string} verifies automated Radio button is disabled and Manual option is selected by default', async function (string) {
    try {
        var el = element(by.xpath("//input[@value='automate']"));
        await expect(el.getAttribute('disabled')).toEqual('disabled');
    } catch (error) {
        console.log(error)
        throw "automated Radio button is enabled"
    }
});

Then('{string} verifies created ticket in alert console', async function (string) {
    try {
        await element(by.xpath("//span[contains(text(),'INC')]")).isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        console.log(error)
        throw "ticket not created"
    }
});

Then('{string} deletes {string} template using template name {string}', async function (string, reassignment, TemplateName) {
    try {
        await objITOpsApi.deleteTemplate(TemplateName)
    } catch (error) {
        console.log(error)
        throw "Admin unable to deletes custom template using template name"
    }
});

Then('{string} creates {string} template {string} for project id as {string}', async function (string, reassignment, TemplateName, ProjectId) {
    try {
        await objITOpsApi.CustomReassignmentTemplate(ProjectId, TemplateName)
    } catch (error) {
        console.log(error)
        throw "Admin unable to creates custom template for project id "
    }
});
Then('{string} Verifies after reassignment threshold it should be assigned to the default group mentioned in the project configuration page as {string}', async function (string, Group) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='ASSIGNED TO']"))), 50000);
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + Group + " (Group)']"))), 50000);
    } catch (error) {
        console.log(error)
        throw "Admin unable to Verify after reassignment threshold it should be assigned to the default group mentioned in the project configuration page"
    }
});

Then('{string} verifies resolution for the selected ticket is shown as closure note', async function (string) {
    try {
        var resolutionData = await element(by.xpath("//div[text()='Recommended Resolution']//following::td[contains(@class,'alert-table-text ticket-des-width')]")).getText()
        await console.log(resolutionData)
        var resolutionDataOnClosureNote = await element(by.xpath("//span[@class='ticket-title']")).getText()
        await console.log(resolutionDataOnClosureNote)
        await expect(resolutionData).to.include(resolutionDataOnClosureNote)
    } catch (error) {
        console.log(error)
        throw "resolution for the selected ticket is not shown as closure note"
    }
})

Then('{string} verifies that ticket should not be created in alert console', async function (string) {
    try {
        await element(by.xpath("//span[contains(text(),'INC')]")).isPresent().then(function (select) {
            expect(select).to.be.false;
        });
    } catch (error) {
        console.log(error)
        throw "ticket got created "
    }
});