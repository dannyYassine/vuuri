import { describe, test, expect, vi } from 'vitest';
import { mount } from '@test/unit/main';
import vuuri from '@/Vuuri.vue';
import { isEmpty } from 'lodash';
import { assert } from '@test/utils.js';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('On destroy', () => {
  test('should remove muuri events on destroy', async () => {
    const todoItems = [];
    const wrapper = mount(vuuri, {
      props: {
        modelValue: todoItems
      }
    });
    wrapper.unmount();

    await assert(() => {
      expect(isEmpty(wrapper.vm.events)).toBeTruthy();
    });
  });

  test('should emit on-destroy event', async () => {
    const wrapper = mount(vuuri, {
      props: {
        modelValue: []
      }
    });
    wrapper.unmount();

    await assert(() => {
      expect(wrapper.emitted()['on-destroy']).toHaveLength(1);
    });
  });
});
