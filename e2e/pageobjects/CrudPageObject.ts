import { BasePageObject } from './BasePageObject';

export class CrudPageObject extends BasePageObject {
  getPath() {
    return 'crud';
  }

  getItems() {
    return this.page.locator('.muuri-grid .muuri-item');
  }

  getAddButton() {
    return this.page.locator('[data-test="add"]');
  }

  getDeleteButton() {
    return this.page.locator('[data-test="delete"]');
  }
}
