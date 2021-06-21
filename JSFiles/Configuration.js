"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/data.properties');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': properties.get('main.browserName'),
    },
    specs: [
        '../Features/LogIn/LogIn_Roles.feature',
        '../Features/ProjectInstallation/ProjectInstallation_Admin.feature',
        '../Features/ProjectInstallation/ProjectInstallation_IE.feature',
    ],
    cucumberOpts: {
        format: 'json:./Reports/cucumberreport.json',
        // tags: "@ProjectCreation",
        require: [
            '../JSFiles/Step_Definitions/LogIn/LogIn.js',
            '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation.js',
            '../JSFiles/hook.js',
            '../support/timeout.js'
        ]
    },
    onPrepare: function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(100000);
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './Reports/cucumberreport.json',
            output: './Reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": " 7.3 © 2021 UST",
                "Test Environment": "STAGING",
                "Browser": "Chrome  91.0.4472.77",
                "Platform": "Windows 10 Pro",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsMkNBQTJDO0FBQzNDLGlFQUFtRDtBQUVuRCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksVUFBVSxHQUFHLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFFekQsUUFBQSxNQUFNLEdBQVc7SUFDekIsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFOUQsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FDcEQ7SUFFRCxLQUFLLEVBQUU7UUFFTCx1Q0FBdUM7UUFDdkMsbUVBQW1FO1FBQ3BFLGdFQUFnRTtLQUVoRTtJQUNDLFlBQVksRUFBRTtRQUVWLE1BQU0sRUFBQyxvQ0FBb0M7UUFDN0MsNEJBQTRCO1FBQzFCLE9BQU8sRUFBRTtZQUNQLDRDQUE0QztZQUM3Qyx3RUFBd0U7WUFDdkUsb0JBQW9CO1lBQ3BCLHVCQUF1QjtTQUN4QjtLQUNOO0lBRUQsU0FBUyxFQUFFO1FBQ1Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNLLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBQywrQkFBK0I7WUFDeEMsTUFBTSxFQUFDLGdDQUFnQztZQUN2QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsaUJBQWlCO2dCQUMvQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsZ0JBQWdCO2dCQUM1QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUcvQixDQUFDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FFQSxDQUFDIn0=