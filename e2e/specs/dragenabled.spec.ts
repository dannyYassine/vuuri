import { expect, test } from 'playwright-test-coverage';
import { DragEnabledPageObject } from '../pageobjects/DragEnabledPageObject';

test.describe('CRUD ', () => {
  test('should drag and drop item in same grid left to right', async ({ page }) => {
    const dragEnabledPageObject = new DragEnabledPageObject(page);
    dragEnabledPageObject.visit();

    const firstItem = dragEnabledPageObject.getItemAtIndex(0);
    const secondItem = dragEnabledPageObject.getItemAtIndex(1);

    await firstItem.hover();
    await page.mouse.down();
    await secondItem.hover();
    await page.mouse.up();

    const firstBox = await firstItem.boundingBox();
    const secondBox = await secondItem.boundingBox();

    expect(firstBox!.x > secondBox!.x).toBeTruthy();
  });

  test('should drag and drop item in same grid right to left', async ({ page }) => {
    const dragEnabledPageObject = new DragEnabledPageObject(page);
    dragEnabledPageObject.visit();

    const firstItem = dragEnabledPageObject.getItemAtIndex(0);
    const secondItem = dragEnabledPageObject.getItemAtIndex(1);

    await secondItem.hover();
    await page.mouse.down();
    await firstItem.hover();
    await page.mouse.up();

    const firstBox = await firstItem.boundingBox();
    const secondBox = await secondItem.boundingBox();

    expect(firstBox!.x > secondBox!.x).toBeTruthy();
  });
});
