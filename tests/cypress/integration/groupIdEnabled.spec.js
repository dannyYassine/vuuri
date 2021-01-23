import { GroupIdEnabledPageObject } from '@/pageobjects/GroupIdEnabled.pageObject';
import { wait } from '@/utils';

context('Drag Enabled', () => {
  it('should drag and drop item in different grid', () => {
    cy.server()

    const groupIdEnabledPo = new GroupIdEnabledPageObject();
    groupIdEnabledPo.visit();

    const item = groupIdEnabledPo.getItemsInGrid1(0).eq(0);

    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });

    cy.window().then(async (window) => {
      const moveBy = 125;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position, clientY: position + moveBy }));
      await wait(1000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));

      groupIdEnabledPo.getItemsInGrid2().then(items => {
        expect(items.length).to.be.equal(4);
      });
    });
  });
  
  it('should update model from drag and drop item in different grid', async () => {
    cy.server();
    
    const groupIdEnabledPo = new GroupIdEnabledPageObject();
    groupIdEnabledPo.visit();
    
    await wait(3000);
    
    let movedItem = null;
    cy.window().then( (window) => {
      movedItem = window.__components__.GroupIdEnabled.todoItems[0];
    });
    
    const item = groupIdEnabledPo.getItemsInGrid1(0).eq(0);

    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });
  
    cy.window().then(async (window) => {
      const moveBy = 125;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position, clientY: position + moveBy }));
      await wait(1000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
      await wait(2000);
      
      const component = window.__components__.GroupIdEnabled;
      expect(component.todoItems.length).to.be.equal(2);
      expect(component.tododoItems.length).to.be.equal(4);
      console.log(component.tododoItems);
      console.log(component.todoItems);
      
      // movedItem should not be in original array
      expect(!!(component.todoItems.find(item => item.id == movedItem.id))).to.be.false;
      // movedItem should be in new array
      expect(!!(component.tododoItems.find(item => item.id == movedItem.id))).to.be.true;
    });
  });
  
  it('should not be able to move an item to another grid with different group-id', async () => {
    cy.server();
    
    const groupIdEnabledPo = new GroupIdEnabledPageObject();
    groupIdEnabledPo.visit();
    
    await wait(3000);
    
    let movedItem = null;
    cy.window().then( (window) => {
      movedItem = window.__components__.GroupIdEnabled.todoItems[0];
    });
    
    const item = groupIdEnabledPo.getItemsInGrid1(0).eq(0);

    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });
  
    cy.window().then(async (window) => {
      const moveBy = 250;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position, clientY: position + moveBy }));
      await wait(1000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
      await wait(3000);
      
      const component = window.__components__.GroupIdEnabled;
      expect(component.todoItems.length).to.be.equal(3);
      expect(component.tododoItems.length).to.be.equal(3);
      expect(component.binItems.length).to.be.equal(1);
      
      // should remain in original array
      expect(!!(component.todoItems.find(item => item.id == movedItem.id))).to.be.true;
    });
  });
})