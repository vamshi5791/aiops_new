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
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': properties.get('main.browserName'),
    },
    // capabilities: {
    //   browserName: 'chrome',
    //   chromeOptions: {
    //    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //    }
    // },
    specs: [
        '../Features/LogIn/LogIn_Roles.feature',
        '../Features/ProjectInstallation/ProjectInstallation_admin.feature',
        '../Features/ProjectInstallation/ProjectInstallation_IE.feature'
    ],
    cucumberOpts: {
        format: 'json:./Reports/cucumberreport.json',
        // tags: "@ProjectCreation",
        require: [
            '../JSFiles/Step_Definitions/LogIn/LogIn.js',
            '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_IE.js',
            '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_admin.js',
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
            output: './Reports/Test_Report_.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsMkNBQTJDO0FBQzNDLGlFQUFtRDtBQUVuRCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksVUFBVSxHQUFHLGdCQUFnQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFFaEUsUUFBQSxNQUFNLEdBQVc7SUFDekIsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFOUQsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FDcEQ7SUFDRCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixzRUFBc0U7SUFDdEUsT0FBTztJQUNQLEtBQUs7SUFFTCxLQUFLLEVBQUU7UUFFTCx1Q0FBdUM7UUFDdkMsbUVBQW1FO1FBQ25FLGdFQUFnRTtLQUVqRTtJQUNDLFlBQVksRUFBRTtRQUVWLE1BQU0sRUFBQyxvQ0FBb0M7UUFDN0MsNEJBQTRCO1FBQzFCLE9BQU8sRUFBRTtZQUNOLDRDQUE0QztZQUM3QywyRUFBMkU7WUFDNUUsOEVBQThFO1lBQzdFLG9CQUFvQjtZQUNwQix1QkFBdUI7U0FDeEI7S0FDTjtJQUVELFNBQVMsRUFBRTtRQUNULG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUMsK0JBQStCO1lBQ3hDLE1BQU0sRUFBQyw2QkFBNkI7WUFDcEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLGlCQUFpQjtnQkFDL0Isa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHL0IsQ0FBQztJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBRUEsQ0FBQyJ9