import { BasePageObject } from "./BasePageObject";

export class DragEnabledPageObject extends BasePageObject {
  getPath() {
    return 'drag-enabled';
  }

  getGrid() {
    return this.page.locator(".muuri-grid");
  }

  getItems() {
    return this.page.locator(".muuri-grid .muuri-item");
  }

  getItemAtIndex(index = 0) {
    return this.page.locator('.muuri-grid .muuri-item').nth(index);
  }
}
