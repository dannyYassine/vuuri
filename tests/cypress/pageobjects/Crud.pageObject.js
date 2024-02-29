import { BasePageObject } from './BasePageObject';

export class CrudPageObject extends BasePageObject {
  getPath() {
    return '/crud';
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
  
  getAddButtonAtIndex() {
    return cy.get('[data-e2e="add-button"]');
  }
  
  getDeleteButtonAtIndex(index = 0) {
    return cy.get('[data-e2e="delete-button"]').eq(index);
  }
}