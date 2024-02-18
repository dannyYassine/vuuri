import { describe, test, expect, vi } from 'vitest';
import { mount } from './main';
import vuuri from '@/Vuuri.vue';
import { assert } from '@test/utils';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('CRUD Operations', () => {
  describe('Adding', () => {
    test('should add new item', async () => {
      const todoItems = [];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      const originalCount = wrapper.vm.modelValue.length;

      const item = { id: 2 };
      todoItems.push(item);
      await wrapper.vm.$nextTick();

      const newCount = wrapper.vm.modelValue.length;
      expect(newCount).toBeGreaterThan(originalCount);
      expect(newCount - originalCount).toBe(1);
    });

    test('should add new item to muuri', async () => {
      const todoItems = [];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      wrapper.vm.muuri.add = vi.fn();
      const originalCount = wrapper.vm.modelValue.length;

      const item = { id: 2 };
      todoItems.push(item);

      await assert(() => {
        expect(wrapper.vm.muuri.add).toHaveBeenCalledTimes(1);
      });
    });
  });
});
