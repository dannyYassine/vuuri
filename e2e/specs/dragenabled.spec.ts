import { expect, test } from "playwright-test-coverage";
import { DragEnabledPageObject } from "../pageobjects/DragEnabledPageObject";
import { wait } from "../utils";

test.describe("CRUD ", () => {
  test.skip("should drag and drop item in same grid", ({ page }) => {
    const dragEnabledPageObject = new DragEnabledPageObject(page);
    dragEnabledPageObject.visit();

    const item = dragEnabledPageObject.getItemAtIndex(0);

    const position = 75;
    // item.trigger("pointerdown", {
    //   eventConstructor: "Poin terEvent",
    //   pointerId: 1,
    //   clientX: position,
    //   clientY: position,
    // });

    // await page.evaluate(async () => {
    //   const moveBy = 100;
    //   window.dispatchEvent(
    //     new PointerEvent("pointermove", {
    //       pointerId: 1,
    //       clientX: position + moveBy,
    //       clientY: 85,
    //     })
    //   );
    //   await wait(1000);
    //   window.dispatchEvent(new PointerEvent("pointerup", { pointerId: 1 }));

    //   dragEnabledPageObject.getItems().then((items) => {
    //     const item1 = items[0];
    //     const item2 = items[1];

    //     expect(item1.getBoundingClientRect().x).to.be.greaterThan(
    //       item2.getBoundingClientRect().x
    //     );
    //   });
    // });
  });
});
