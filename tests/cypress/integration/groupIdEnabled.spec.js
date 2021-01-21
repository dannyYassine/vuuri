import { GroupIdEnabledPageObject } from '@/pageobjects/GroupIdEnabled.pageObject';
import { wait } from '@/utils';

context('Drag Enabled', () => {
  it('should drag and drop item in same grid', () => {
    cy.server()
    
    const groupIdEnabledPo = new GroupIdEnabledPageObject();
    groupIdEnabledPo.visit();
  
    const item = groupIdEnabledPo.getItemsInGrid1(0).eq(0);
  
    const position = 75;
    item.trigger('pointerdown', { eventConstructor: 'PointerEvent', pointerId: 1, clientX: position, clientY: position });

    cy.window().then(async (window) => {
      const moveBy = 150;
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: position, clientY: position + moveBy }));
      await wait(1000);
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));

      groupIdEnabledPo.getItemsInGrid2().then(items => {
        expect(items.length).to.be.equal(4);
      });
    });
  });
})