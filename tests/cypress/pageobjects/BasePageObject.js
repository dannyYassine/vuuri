export class BasePageObject {
  getPort() {
    return '9999'
  }
  
  getHost() {
    return 'http://localhost'
  }
  
  getUrl() {
    return `${this.getHost()}:${this.getPort()}/#/tests${this.getPath()}`
  }
  
  /**
   * @abstract
   */
  getPath() {
  
  }
  
  visit() {
    cy.visit(`${Cypress.env('CLIENT_URL') || this.getUrl()}`);
  }
}