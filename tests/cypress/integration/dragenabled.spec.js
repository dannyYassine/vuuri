import { DragEnabledPageObject } from '@/pageobjects/DragEnabled.pageObject';
import { wait } from '@/utils';

context('Drag Enabled', () => {
  it('should drag and drop item in same grid', () => {
    cy.server()
    
    const dragEnabledPageObject = new DragEnabledPageObject();
    dragEnabledPageObject.visit();
    
    const item = dragEnabledPageObject.getItemAtIndex(0);
    
    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });
    
    cy.window().then(async (window) => {
      const moveBy = 100;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position + moveBy, clientY: 85 }));
      await wait(1000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
      
      dragEnabledPageObject.getItems().then(items => {
        const item1 = items[0];
        const item2 = items[1];
        
        expect(item1.getBoundingClientRect().x).to.be.greaterThan(item2.getBoundingClientRect().x);
      });
    });
  });
  
  
  it('should update model while drag and drop item in same grid', () => {
    cy.server()
    
    const dragEnabledPageObject = new DragEnabledPageObject();
    dragEnabledPageObject.visit();
  
    let firstItem = null;
    let secondItem = null;
    cy.window().then(async (window) => {
      firstItem = window.__components__.DragEnabled.items[0];
      secondItem = window.__components__.DragEnabled.items[1];
    });
    
    const item = dragEnabledPageObject.getItemAtIndex(0);
    
    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });
    
    cy.window().then(async (window) => {
      const moveBy = 100;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position + moveBy, clientY: 85 }));
      await wait(2000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
      await wait(3000);
      
      await window.__components__.DragEnabled.$nextTick();
      
      const newFirstItem = window.__components__.DragEnabled.items[0];
      const newSecondItem = window.__components__.DragEnabled.items[1];
      expect(newFirstItem.id).to.equal(secondItem.id);
      expect(newSecondItem.id).to.equal(firstItem.id);
    });
  });
})