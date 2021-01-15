import { AppPageobject } from '../pageobjects/App.pageobject';

context('Send invites Page', () => {
  it('should send invites with at least 3 friends', () => {
    cy.server()
    cy.route('POST', '/api/distribute').as('distribute')
    
    const appPageObject = new AppPageobject();
  
    appPageObject.visit();
    
    appPageObject.getAddFriendButton().click();
  
    appPageObject.getFriendNameInput().type('Danny');
    appPageObject.getFriendEmailInput().type('dannyyassine@gmail.com');
    appPageObject.getAddressStreetNumberInput().type('124');
    appPageObject.getAddressStreetNameInput().type('1 1st Avenue');
    appPageObject.getAddressCityInput().type('Montreal');
    appPageObject.getAddressPostalCodeInput().type('A1A 1A1');
  
    appPageObject.getAddFriendButton().click();
  
    appPageObject.getFriendNameInput(1).type('Danny1');
    appPageObject.getFriendEmailInput(1).type('dannyyassine+1@gmail.com');
    appPageObject.getAddressStreetNumberInput(1).type('124');
    appPageObject.getAddressStreetNameInput(1).type('1 1st Avenue');
    appPageObject.getAddressCityInput(1).type('Montreal');
    appPageObject.getAddressPostalCodeInput(1).type('A1A 1A1');
    
    appPageObject.getAddFriendButton().click();
  
    appPageObject.getFriendNameInput(2).type('Danny2');
    appPageObject.getFriendEmailInput(2).type('dannyyassine+2@gmail.com');
    appPageObject.getAddressStreetNumberInput(2).type('125');
    appPageObject.getAddressStreetNameInput(2).type('1 1st Avenue');
    appPageObject.getAddressCityInput(2).type('Montreal');
    appPageObject.getAddressPostalCodeInput(2).type('A1A 1A1');
    
    appPageObject.getSendInvitesButton().click();
  
    cy.wait('@distribute');
  
    cy.get('@distribute').should(request => expect(request.status).to.equal(200));
  });
})