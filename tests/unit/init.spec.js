import { describe, test, expect, vi } from 'vitest';
import vuuri from '@/Vuuri.vue';
import { assert, mount } from '@test/utils';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('On init', () => {
  test('should render with minimal props', async () => {
    const todoItems = [];
    const wrapper = mount(vuuri, {
      props: {
        modelValue: todoItems
      }
    });

    await assert(() => {
      expect(wrapper.html()).toBeTruthy();
    });
  });
});
