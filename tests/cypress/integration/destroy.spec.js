import { DestroyPageObject } from "@/pageobjects/Destroy.pageObject";
import { wait } from '@/utils';

context('Destroy ', () => {
  it('should remove all listeners', () => {
    cy.server()
    
    const destroyPageObject = new DestroyPageObject();
    destroyPageObject.visit();
    
    wait(2000);
  
    destroyPageObject.getGrid().should('exist');
    destroyPageObject.getDestroyButton().click();
    
    destroyPageObject.getGrid().should('not.exist');
  });
})