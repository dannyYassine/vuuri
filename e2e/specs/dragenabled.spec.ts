import { expect, test } from "playwright-test-coverage";
import { DragEnabledPageObject } from "../pageobjects/DragEnabledPageObject";
import { wait } from "../utils";

test.describe("CRUD ", () => {
  test("should drag and drop item in same grid", async ({ page }) => {
    const dragEnabledPageObject = new DragEnabledPageObject(page);
    dragEnabledPageObject.visit();

    await wait(2000);

    const firstItem = dragEnabledPageObject.getItemAtIndex(0);
    const secondItem = dragEnabledPageObject.getItemAtIndex(1);

    await firstItem.hover();
    await wait(500);
    await page.mouse.down();
    await wait(500);
    await secondItem.hover();
    await wait(500);
    await page.mouse.up();
    await wait(500);
    
    const firstBox = firstItem.boundingBox();
    const secondBox = secondItem.boundingBox();

    expect(firstBox.x > secondBox.x).toBeTruthy();
  });
});
