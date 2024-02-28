import { expect, test } from 'playwright-test-coverage';
import { CrudPageObject } from '../pageobjects/CrudPageObject';
import { wait } from '../utils';

test.describe('CRUD ', () => {
  test('should add new items', async ({ page }) => {
    const crudPageObject = new CrudPageObject(page);
    crudPageObject.visit();

    await wait(2000);

    let initialCount = await crudPageObject.getItems().count();
    console.log('initialCount', initialCount);

    await crudPageObject.getAddButton().click();

    // const components = await page.evaluateHandle('window.vuuriComponents.AddDeleteDemo');
    // console.log('__components__', components);

    // await page.evaluate(() => {
    //   const component = window.vuuriComponents.AddDeleteDemo;
    //   component.items.push({
    //     id: Math.random(),
    //     name: Math.random() + ''
    //   });
    // });

    await wait(2000);

    const newCount = await crudPageObject.getItems().count();
    expect(newCount).toEqual(++initialCount);
  });

  test('should delete items', async ({ page }) => {
    const crudPageObject = new CrudPageObject(page);
    crudPageObject.visit();

    await wait(2000);

    let initialCount = await crudPageObject.getItems().count();

    await crudPageObject.getDeleteButton().click();

    await wait(2000);

    const newCount = await crudPageObject.getItems().count();
    expect(newCount).toEqual(--initialCount);
  });
});
