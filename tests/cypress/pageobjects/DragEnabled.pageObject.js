import { BasePageObject } from './BasePageObject';

export class DragEnabledPageObject extends BasePageObject {
  getPath() {
    return '/drag-enabled';
  }
  
  getGrid() {
    return cy.get('.muuri-grid');
  }
  
  getItems() {
   return cy.get('.muuri-grid .muuri-item');
  }
  
  getItemAtIndex(index = 0) {
   return cy.get('.muuri-grid .muuri-item').eq(index);
  }
}