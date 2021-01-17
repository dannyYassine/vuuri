import { DragEnabledPageObject } from '../pageobjects/DragEnabled.po';
import { wait } from '../utils';

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
})