import { DragEnabled } from '../pageobjects/DragEnabled.po';

context('Drag Enabled', () => {
  it('should send invites with at least 3 friends', () => {
    const dragEnabledPageObject = new DragEnabled();
    dragEnabledPageObject.visit();
    
    dragEnabledPageObject.getItemAtIndex(0);
  });
})