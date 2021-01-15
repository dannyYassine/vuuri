export class DragEnabledPageObject {
  visit() {
    cy.visit(`${Cypress.env('CLIENT_URL') || 'http://localhost:8080/tests/drag-enabled'}`);
  }
  
  getItemAtIndex(index = 0) {
    return cy.get('.muuri-grid .muuri-item')[0];
  }
}