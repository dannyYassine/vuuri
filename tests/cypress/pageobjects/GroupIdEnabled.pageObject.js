import { BasePageObject } from './BasePageObject';

export class GroupIdEnabledPageObject extends BasePageObject {
  getPath() {
    return '/group-id-enabled';
  }
  
  getItemsInGrid1() {
    return cy.get('.group-1.muuri-grid .muuri-item:not(.muuri-item-placeholder)');
  }
  
  getItemsInGrid2() {
    return cy.get('.group-2.muuri-grid .muuri-item:not(.muuri-item-placeholder)');
  }
  
  getItems() {
   return cy.get('.muuri-grid .muuri-item');
  }
  
  getItemAtIndex(index = 0) {
   return cy.get('.muuri-grid .muuri-item').eq(index);
  }
}