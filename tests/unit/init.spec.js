import { describe, test, expect, vi } from 'vitest';
import { mount } from './main';
import vuuri from '@/Vuuri.vue';
import { GridEvent } from '@/GridEvent';
import { assert } from '@test/utils.js';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('On init', () => {
  test('should add all muuri events', async () => {
    const todoItems = [];
    const wrapper = mount(vuuri, {
      props: {
        modelValue: todoItems
      }
    });

    await assert(() => {
      expect(wrapper.vm.events).toBeDefined();
      Object.values(GridEvent).forEach((event) => {
        expect(wrapper.vm.events[event]).toBeTruthy();
      });
    });
  });
});
