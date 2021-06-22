"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var EC = protractor_1.browser.ExpectedConditions;
class dropdowns {
    constructor(SelectTimeZone) {
        this.drpDropdownValue = SelectTimeZone;
    }
    selectByVisibleText(DropdownValue) {
        this.drpDropdownValue.click();
        this.drpDropdownValue.element(protractor_1.by.xpath("//span[text()='" + DropdownValue + "']")).click();
    }
}
exports.dropdowns = dropdowns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdXBwb3J0L2Ryb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFGO0FBQ3JGLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsTUFBYSxTQUFTO0lBR2xCLFlBQVksY0FBNEI7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQTtJQUVwQyxDQUFDO0lBRU0sbUJBQW1CLENBQUMsYUFBb0I7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxRixDQUFDO0NBQ0o7QUFaRCw4QkFZQyJ9