"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.manage().window().maximize();
    });
});
//screenshots for scenarios
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
        else if (scenario.result.status === cucumber_1.Status.PASSED) {
            if (properties.get('main.Required_screenshot') == true) {
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
            }
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2hvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVDQUFrRTtBQUNsRSwyQ0FBcUM7QUFDckMsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBSTNFLGlCQUFNLENBQUU7O1FBQ04sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILDJCQUEyQjtBQUUzQixnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFFM0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFDM0M7WUFDQyxNQUFNLFVBQVUsR0FBRSxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7YUFFQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUM1QztZQUNFLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLElBQUksRUFDdEQ7Z0JBQ0UsTUFBTSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUVqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBR1AsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9