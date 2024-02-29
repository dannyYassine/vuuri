import { BasePageObject } from "./BasePageObject";

export class GroupDragEnabledPageObject extends BasePageObject {
  getPath() {
    return "group-drag-enabled";
  }

  getItemsAtIndex(index = 0) {
    return this.page.locator(".muuri-grid").nth(index).locator(".muuri-item");
  }

  getItemAtGridIndexForIndex(gridIndex = 0, index = 0) {
    return this.page
      .locator(".muuri-grid")
      .nth(gridIndex)
      .locator(".muuri-item")
      .nth(index);
  }
}
