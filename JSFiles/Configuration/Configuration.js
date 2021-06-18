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
var properties = PropertiesReader('./PageObjects/data.properties');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        //  browserName: 'chrome'
        'browserName': properties.get('main.browserName'),
    },
    specs: [
        '.../Features/ProjectInstallation.feature',
    ],
    cucumberOpts: {
        format: 'json:./Reports/cucumberreport.json',
        // tags: "@ChannelConfiguration",
        require: [
            '.../JSFiles/Step_Definitions/StepDef.js',
            '../JSFiles/hook.js',
            '../Step_Definitions/timeout.js'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbmZpZ3VyYXRpb24vQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSwyQ0FBMkM7QUFDM0MsaUVBQW1EO0FBRW5ELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV4RCxRQUFBLE1BQU0sR0FBVztJQUN6QixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUU5RCxZQUFZLEVBQUU7UUFDZCx5QkFBeUI7UUFDdkIsYUFBYSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FDcEQ7SUFFRCxLQUFLLEVBQUU7UUFDTiwwQ0FBMEM7S0FJMUM7SUFDQyxZQUFZLEVBQUU7UUFFVixNQUFNLEVBQUMsb0NBQW9DO1FBQzdDLGlDQUFpQztRQUMvQixPQUFPLEVBQUU7WUFDUCx5Q0FBeUM7WUFDekMsb0JBQW9CO1lBQ3BCLGdDQUFnQztTQUNqQztLQUNOO0lBRUQsU0FBUyxFQUFFO1FBQ1Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNLLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBQywrQkFBK0I7WUFDeEMsTUFBTSxFQUFDLGdDQUFnQztZQUN2QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsaUJBQWlCO2dCQUMvQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsZ0JBQWdCO2dCQUM1QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUcvQixDQUFDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FFQSxDQUFDIn0=