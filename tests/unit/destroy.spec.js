import { describe, test, expect, vi } from 'vitest';
import { mount } from './main';
import vuuri from "@/Vuuri.vue";
import { isEmpty } from 'lodash';
import { GridEvent } from "@/GridEvent";

vi.mock('muuri', async () => {
  return (await import('../__mocks__/muuri.js'))
}
);

describe("CRUD Operations", () => {
  describe('Adding', () => {
    test('should add all muuri events', async () => {
      const todoItems = [];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.events).toBeDefined();
      Object.values(GridEvent).forEach(event => {
        expect(wrapper.vm.events[event]).toBeTruthy();
      });
    });
    
    test('should remove muuri events on destroy', async () => {
      const todoItems = [];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      wrapper.unmount();

      expect(isEmpty(wrapper.vm.events)).toBeTruthy();
    });
  });
  
});
