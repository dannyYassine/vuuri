import { CrudPageObject } from '@/pageobjects/Crud.pageObject';
import { wait } from '@/utils';

context('CRUD ', () => {
  it('should add new items', () => {
    cy.server()
    
    const crudPageObject = new CrudPageObject();
    crudPageObject.visit();
    
    wait(2000);
  
    crudPageObject.getItems().should('have.length', 1);
  
    cy.window().then( (window) => {
      const component = window.__components__.AddDeleteDemo;
      component.items.push({
        id: Math.random(),
        name: Math.random()+''
      });
    });
    
    wait(2000);
  
    crudPageObject.getItems().should('have.length', 2);
  });
  
  it('should delete items', () => {
    cy.server()
  
    const crudPageObject = new CrudPageObject();
    crudPageObject.visit();
  
    wait(2000);
  
    crudPageObject.getItems().should('have.length', 1);
  
    cy.window().then( (window) => {
      const component = window.__components__.AddDeleteDemo;
      component.items.splice(0, 1);
    });
    
    wait(2000);
    
    crudPageObject.getItems().should('have.length', 0);
  });
})