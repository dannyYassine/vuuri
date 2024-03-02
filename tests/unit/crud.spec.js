import { describe, test, expect, vi } from 'vitest';
import vuuri from '@/Vuuri.vue';
import { assert, mount } from '@test/utils';

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

  describe('Deleting', () => {
    test('should delete items from muuri with default primary key', async () => {
      const todoItems = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      wrapper.vm.muuri.refreshItems = vi.fn().mockReturnValue({
        layout: vi.fn()
      });
      wrapper.vm.muuri.hide = vi.fn();
      wrapper.vm.muuri.remove = vi.fn();
      wrapper.vm.muuri.getItems = vi.fn().mockReturnValue([]);

      wrapper.vm.modelValue.splice(0, 1);

      await assert(() => {
        expect(wrapper.vm.muuri.refreshItems).toHaveBeenCalled();
        expect(wrapper.vm.copiedItems.length).toEqual(2);
        expect(wrapper.vm.copiedItems[0].id).toEqual(2);
        expect(wrapper.vm.copiedItems[1].id).toEqual(3);
      });
    });

    test('should delete items from muuri with default primary key', async () => {
      const todoItems = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems
        }
      });
      wrapper.vm.muuri.refreshItems = vi.fn().mockReturnValue({
        layout: vi.fn()
      });
      wrapper.vm.muuri.hide = vi.fn();
      wrapper.vm.muuri.remove = vi.fn();
      wrapper.vm.muuri.getItems = vi.fn().mockReturnValue([]);

      wrapper.vm.modelValue.splice(0, 1);

      await assert(() => {
        expect(wrapper.vm.muuri.refreshItems).toHaveBeenCalled();
        expect(wrapper.vm.copiedItems.length).toEqual(2);
        expect(wrapper.vm.copiedItems[0].id).toEqual(2);
        expect(wrapper.vm.copiedItems[1].id).toEqual(3);
      });
    });

    test('should delete items from muuri with custom primary key', async () => {
      const todoItems = [
        {
          customId: 1
        },
        {
          customId: 2
        },
        {
          customId: 3
        }
      ];
      const wrapper = mount(vuuri, {
        props: {
          modelValue: todoItems,
          itemKey: 'customId'
        }
      });
      wrapper.vm.muuri.refreshItems = vi.fn().mockReturnValue({
        layout: vi.fn()
      });
      wrapper.vm.muuri.hide = vi.fn();
      wrapper.vm.muuri.remove = vi.fn();
      wrapper.vm.muuri.getItems = vi.fn().mockReturnValue([]);

      wrapper.vm.modelValue.splice(0, 1);

      await assert(() => {
        expect(wrapper.vm.muuri.refreshItems).toHaveBeenCalled();
        expect(wrapper.vm.copiedItems.length).toEqual(2);
        expect(wrapper.vm.copiedItems[0].customId).toEqual(2);
        expect(wrapper.vm.copiedItems[1].customId).toEqual(3);
      });
    });
  });
});
