import { CrudPageObject } from '../pageobjects/CrudPageObject';
import { wait } from '../utils';
import { test, expect } from "playwright-test-coverage";

test.describe.skip('CRUD ', () => {
    test('should add new items', async ({page}) => {
    const crudPageObject = new CrudPageObject(page);
    crudPageObject.visit();
    
    await wait(2000);
  
    expect(crudPageObject.getItems().count().length).toEqual(1);
  
    await page.evaluate(async () => {
      const component = window.__components__.AddDeleteDemo;
      component.items.push({
        id: Math.random(),
        name: Math.random()+''
      });
    });
    
    await wait(2000);
  
    expect(crudPageObject.getItems().count().length).toEqual(2);
  });
  
  test('should delete items', async ({page}) => {
    const crudPageObject = new CrudPageObject(page);
    crudPageObject.visit();
  
    await wait(2000);
  
    expect(crudPageObject.getItems().count().length).toEqual(0);
  
    await page.evaluate(async () => {
        const component = window.__components__.AddDeleteDemo;
        component.items.push({
          id: Math.random(),
          name: Math.random()+''
        });
    });
    
    await wait(2000);
    
    expect(crudPageObject.getItems().count().length).toEqual(0);
  });
})