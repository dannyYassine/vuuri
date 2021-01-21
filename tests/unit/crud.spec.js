import { mount } from './main';

jest.mock('muuri');

import vuuri from "../../client/src/vuuri";

describe("CRUD Operations", () => {
  
  let wrapper;
  
  beforeEach(() => {
  });
  
  describe('Adding', () => {
    test('should add new item', async () => {
      const todoItems = [];
      wrapper = mount(vuuri, {
        propsData: {
          items: todoItems
        }
      });
      const originalCount = wrapper.vm.items.length;

      const item = { id: 2 };
      todoItems.push(item);
      await wrapper.vm.$nextTick();

      const newCount = wrapper.vm.items.length;
      expect(newCount).toBeGreaterThan(originalCount);
      expect(newCount - originalCount).toBe(1);
    });
    
    test('should add new item to muuri', async () => {
      const todoItems = [];
      wrapper = mount(vuuri, {
        propsData: {
          items: todoItems
        }
      });
      wrapper.vm.muuri.add = jest.fn();
      const originalCount = wrapper.vm.items.length;

      const item = { id: 2 };
      todoItems.push(item);
      await wrapper.vm.$nextTick();

      const newCount = wrapper.vm.items.length;
      expect(wrapper.vm.muuri.add).toHaveBeenCalledTimes(1);
    });
  });
  
});
