
export class AppPageobject {
  
  visit() {
    cy.visit(`${Cypress.env('CLIENT_URL') || 'http://localhost:8080'}`);
  }
  
  getAddFriendButton() {
    return cy.get('[data-e2e="add-friend"]');
  }
  
  getSendInvitesButton() {
    return cy.get('[data-e2e="send-invites"]');
  }
  
  getFriendNameInput(index = 0) {
    return cy.get('[data-e2e="friend-input-name"]').eq(index);
  }
  
  getFriendEmailInput(index = 0) {
    return cy.get('[data-e2e="friend-input-email"]').eq(index);
  }
  
  getAddressStreetNumberInput(index = 0) {
    return cy.get('[data-e2e="address-input-street-number"]').eq(index);
  }
  
  getAddressStreetNameInput(index = 0) {
    return cy.get('[data-e2e="address-input-street-name"]').eq(index);
  }
  
  getAddressCityInput(index = 0) {
    return cy.get('[data-e2e="address-input-city"]').eq(index);
  }
  
  getAddressPostalCodeInput(index = 0) {
    return cy.get('[data-e2e="address-input-postal-code"]').eq(index);
  }
}