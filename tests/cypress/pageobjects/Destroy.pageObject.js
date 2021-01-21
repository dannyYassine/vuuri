import { BasePageObject } from './BasePageObject';

export class DestroyPageObject extends BasePageObject {
  getPath() {
    return '/destroy';
  }
  
  getGrid() {
    return cy.get('.muuri-grid');
  }
  
  getDestroyButton() {
    return cy.get('[data-e2e="destroy-button"]')
  }
}