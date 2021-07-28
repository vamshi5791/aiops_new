
# Project Introduction: Regression Test Automation for UST - SmartOps platform 


# Project Overview:

	 Automation of 250 Regression Test cases in ITOps platform covering GUI & API functionality testing using robust framework

# Project Description:

	Automation of Regression test cases using Protractor framework, cucumber BDD tool and Custom Cucumber reports.
	Jenkins to trigger Test scripts execution as a part of DevOps CI-CD pipeline

# Project Setup:
  
	Recommended Editor: Visual Studio Code 
	
#Project installation Steps.
	
	install node js exe file(version 14.17.3) from https://nodejs.org/en/download/
	"npm install -g protractor" (version 7.0.0)
	"npm install" run this command from project folder path  
	"npm run webdriver-update" (chromedriver version 91.0.4472.101)
	
#Prerequisites

    Chrome Version 92.0.4515.107
	
# Running the Test:

	node node_modules/protractor/bin//protractor JSFiles/Configuration.js --params.env ${Environment_Name} --browser=${Browser} --Options=${BrowserMode} --cucumberOpts.tags=${TEST_TAG} --no-sandbox

# Troubleshooting:

	Steps to troubleshoot.
