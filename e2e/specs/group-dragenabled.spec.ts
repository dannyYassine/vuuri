import { expect, test } from 'playwright-test-coverage';
import { GroupDragEnabledPageObject } from '../pageobjects/GroupDragEnabledPageObject';
import { wait } from '../utils';

test.describe('Group dragging ', () => {
  test('should drag and drop an item in a different group', async ({ page }) => {
    const groupDragEnabledPageObject = new GroupDragEnabledPageObject(page);
    groupDragEnabledPageObject.visit();

    await wait(1000);

    const initialFirstGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(0).count();
    const initialSecondGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(1).count();

    const firstItem = groupDragEnabledPageObject.getItemAtGridIndexForIndex(0, 0);
    const secondItem = groupDragEnabledPageObject.getItemAtGridIndexForIndex(1, 0);

    await firstItem.hover();
    await wait(500);
    await page.mouse.down();
    await wait(500);
    await secondItem.hover();
    await wait(500);
    await page.mouse.up();
    await wait(1000);

    const firstGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(0).count();
    const secondGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(1).count();

    expect(initialFirstGridItemsCount > firstGridItemsCount).toBeTruthy();
    expect(initialSecondGridItemsCount < secondGridItemsCount).toBeTruthy();
    expect(secondGridItemsCount > firstGridItemsCount).toBeTruthy();
  });

  test('should not be able to drag and drop an item not part of the same group of group ids', async ({
    page
  }) => {
    const groupDragEnabledPageObject = new GroupDragEnabledPageObject(page);
    groupDragEnabledPageObject.visit();

    await wait(1000);

    const initialFirstGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(0).count();
    const initialSecondGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(2).count();

    const firstItem = groupDragEnabledPageObject.getItemAtGridIndexForIndex(0);
    const secondItem = groupDragEnabledPageObject.getItemAtGridIndexForIndex(2);

    await firstItem.hover();
    await wait(500);
    await page.mouse.down();
    await wait(500);
    await secondItem.hover();
    await wait(500);
    await page.mouse.up();
    await wait(1000);

    const firstGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(0).count();
    const secondGridItemsCount = await groupDragEnabledPageObject.getItemsAtIndex(2).count();

    expect(initialFirstGridItemsCount === firstGridItemsCount).toBeTruthy();
    expect(initialSecondGridItemsCount === secondGridItemsCount).toBeTruthy();
  });
});
