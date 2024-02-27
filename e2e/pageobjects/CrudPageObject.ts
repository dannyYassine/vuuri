import { BasePageObject } from './BasePageObject';

export class CrudPageObject extends BasePageObject {
  getPath() {
    return 'crud';
  }
  
  getGrid() {
    return this.page.locator('.muuri-grid');
  }
  
  getItems() {
    return this.page.locator('.muuri-grid .muuri-item');
  }
  
  getItemAtIndex(index = 0) {
    return this.page.locator('.muuri-grid .muuri-item').nth(index);
  }
  
  getAddButtonAtIndex() {
    return this.page.locator('[data-test="add"]');
  }
  
  getDeleteButtonAtIndex(index = 0) {
    return this.page.locator('[data-test="delete"]').nth(index);
  }
}