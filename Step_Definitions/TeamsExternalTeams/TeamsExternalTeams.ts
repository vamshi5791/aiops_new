import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { DisplayConfiguration } from "../../PageObjects/DisplayConfiguration";
let objDisplayConfig = new DisplayConfiguration();
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
var sortMembersFromTicketConsole;
var teamMembers, sortMembers;
var teamArray = new Array(), sortArray = new Array();

When('{string} clicks on external Teams', async function (string) {
    try {

        await objDisplayConfig.clickOnExternalTeams()
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='External Teams']"))), 100000);
        await browser.sleep(5000)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on external Teams"
    }
});


When('{string} selects source as {string} in external Teams', async function (string, SourceName) {
    try {
        await objDisplayConfig.selectSource(SourceName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to selects source"
    }
});
When('{string} clicks on choose a group dropdown', async function (string) {
    try {
        await objDisplayConfig.clickOnChooseGroup()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on choose a group dropdown"
    }
});
When('{string} clicks on choose a group dropdown on assign to popup', async function (string) {
    try {
        await element(by.xpath("//label[text()='Choose a Group*']")).click()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on choose a group dropdown on assign to popup"
    }
});
When('{string} search for a group as {string} in external Teams', async function (string, GroupName) {
    try {
        await objDisplayConfig.searchForGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to search for a group"
    }
});
When('{string} clicks on import button in external teams', async function (string) {
    try {

        await objDisplayConfig.clickOnImportGroup()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on import button in external teams"
    }
});

When('{string} verifies all the groups having {string} should be displayed', async function (string, FieldName) {
    try {
        await objDisplayConfig.verifyingFields(FieldName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies all the groups"
    }
});


When('{string} selects group in external Teams {string}', async function (string, GroupName) {
    try {
        await objDisplayConfig.selectGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to selects group in external Teams"
    }
});



When('{string} clicks on all groups dropdown', async function (string) {
    try {
        await objDisplayConfig.clickOnAllGroup()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on all groups dropdown"
    }
});


When('{string} searches for a group as {string} in external Teams', async function (string, GroupName) {
    try {
        await objDisplayConfig.searchForAllGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to searches for a group"
    }
});


When('{string} selects group in external Teams as {string}', async function (string, GroupName) {
    try {
        await objDisplayConfig.selectGroup(GroupName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to selects group in external Teams"
    }
});


Then('{string} verifies Search option to be available', async function (string) {
    try {
        await objDisplayConfig.btnSearch.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies Search option to be available"
    }
});


Then('{string} verifies Refresh option to be available', async function (string) {
    try {
        await objDisplayConfig.btnRefresh.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies Refresh option to be available"
    }
});
Then('{string} verifies import button should not be available', async function (string) {
    try {
        await objDisplayConfig.btnImportGroup.isPresent().then(function (select) {
            expect(select).to.be.false;
        });
    } catch (error) {
        await console.log(error)
        throw "verifies import button is available"
    }
});

Then('{string} clicks on sort button', async function (string) {
    try {
        await objDisplayConfig.clickOnSort()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on sort button"
    }
});

Then('{string} searches for user in search box as {string}', async function (string, UserName) {
    try {
        await objDisplayConfig.searchForGroup(UserName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to  searches for user in search box"
    }
});

Then('{string} verifies sort option to be available', async function (string) {
    try {
        await objDisplayConfig.btnSort.isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies sort option to be available"
    }
});


Then('{string} verifies Refresh option should not be available', async function (string) {
    try {
        await objDisplayConfig.btnRefresh.isPresent().then(function (select) {
            expect(select).to.be.false;
        });
    } catch (error) {
        await console.log(error)
        throw "verifies Refresh option is available "
    }
});


Then('{string} verifies user matching search should be displayed and his group also should be shown {string}, {string}', async function (string, UserName, Group) {
    try {
        await objDisplayConfig.verifyingFields(UserName)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies user matching search should be displayed and his group"
    }
});


//splitting tickets 

Then('{string} selects {string} alert checkbox from pop up', async function (string, checkBoxNumber) {
    try {
        await objDisplayConfig.splittingTickets(checkBoxNumber)
    } catch (error) {
        await console.log(error)
        throw "Admin unable to selects alert checkbox from pop up"
    }
});

When('{string} verifies groups shown in dropdown {string}, {string}', async function (string, FirstGroup, SecondGroup) {
    try {
        await objDisplayConfig.verifyingFields(FirstGroup)
        await objDisplayConfig.verifyingFields(SecondGroup)
    } catch (error) {
        await console.log(error);
        throw "Admin unable to verifies groups shown in dropdown"

    }
});

Then('{string} verifies the all team member names are in alphabetical', async function (string) {
    try {
        var teamMembers, sortMembers;
        var teamArray = new Array(), sortArray = new Array();
        var MemberCount;
        element.all(by.xpath('//div[contains(@class,"group-member-details ng-star-inserted")]')).count().then(function (MemberCount) {
            console.log("count of classes:" + MemberCount);
        });
        for (let i = 1; i <= MemberCount; i++) {
            sortMembers = await element(by.xpath('//div[contains(@class,"group-member-details ng-star-inserted")][' + i + ']')).getText();
            await console.log("All team members in the group " + sortMembers);
            sortArray[i] = sortMembers;
        }
        for (let i = 1; i <= MemberCount; i++) {
            teamMembers = await element(by.xpath('//div[contains(@class,"group-member-details ng-star-inserted")][' + i + ']')).getText();
            await console.log("All team members in the group " + teamMembers);
            teamArray[i] = teamMembers;
        }
        await expect(sortArray).to.equal(teamArray);
        await expect(sortMembers).to.equal(teamMembers);
    } catch (error) {
        console.log(error);
        throw "all team members are not in alphabetical order"
    }
})


Then('{string} gets all the members from selected group', async function (string) {
    try {
        var GroupCount;
        element.all(by.xpath('//div[contains(@class,"group-member-details ng-star-inserted")]')).count().then(function (GroupCount) {
            console.log("count of classes:" + GroupCount);
        });
        for (let i = 1; i <= GroupCount; i++) {
            sortMembers = await element(by.xpath('//div[contains(@class,"group-member-details ng-star-inserted")][' + i + ']')).getText();
            await console.log(sortMembers);
            sortArray[i] = sortMembers;
        }
    } catch (error) {
        console.log(error);
        throw "all team members are not in alphabetical order"
    }
})

Then('{string} verifies Member drop should contains only users list who are having access to selected group name', async function (string) {
    try {
        var GroupCount;
        element.all(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])')).count().then(function (GroupCount) {
            console.log("count of classes:" + GroupCount);
        });
        for (let i = 1; i <= GroupCount; i++) {
            sortMembersFromTicketConsole = await element(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])[' + i + ']')).getText();
            await console.log(sortMembersFromTicketConsole);
            await expect(sortMembersFromTicketConsole).to.equal(sortArray[i]);
        }
    } catch (error) {

        console.log(error)
        throw "Member dropdown should not contains only users list who are having access to selected group name"
    }
});

Then('{string} gets all the groups dropdown', async function (string) {
    try {
        var GroupCount;
        element.all(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])')).count().then(function (GroupCount) {
            console.log("count of classes:" + GroupCount);
        });
        for (let i = 1; i <= GroupCount; i++) {
            sortMembers = await element(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])[' + i + ']')).getText();
            await console.log(sortMembers);
            sortArray[i] = sortMembers;
        }
    } catch (error) {
        console.log(error);
        throw "all team members are not in alphabetical order"
    }
})
Then('{string} verifies group drop down should contains imported groups through external teams option', async function (string) {
    try {
        var GroupCount;
        element.all(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])')).count().then(function (GroupCount) {
            console.log("count of classes:" + GroupCount);
        });
        for (let i = 1; i <= GroupCount; i++) {
            sortMembersFromTicketConsole = await element(by.xpath('(//li[@class="smo-dropdown-item smo-dropdown-item-ms"])[' + i + ']')).getText();
            await console.log(sortMembersFromTicketConsole);
            await expect(sortMembersFromTicketConsole).to.equal(sortArray[i]);
        }
    } catch (error) {
        console.log(error)
        throw "group drop down should not contains imported groups through external teams option"
    }
});

When('{string} clicks on choose a team member dropdown', async function (UserRole) {
    try {
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//label[text()='Choose a Team member*']//following::span"))), 50000);
        await element(by.xpath("//label[text()='Choose a Team member*']//following::span")).click();
    } catch (error) {
        await console.log("Action Name : selecting user from the team member drop down")
        await console.log(error)
        throw "unable to select user from team member drop down"
    }
});