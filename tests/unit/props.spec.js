import { describe, test, expect, vi } from 'vitest';
import { mount } from '@test/unit/main';
import vuuri from '@/Vuuri.vue';
import { assert } from '@test/utils';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('Props', () => {
  describe('prop className', () => {
    test('should add className to vuuri container', async () => {
      const className = 'my-something-class';
      const wrapper = mount(vuuri, {
        props: {
          modelValue: [],
          className
        }
      });

      const grid = wrapper.find('> div.muuri-grid');

      await assert(() => {
        expect(grid.classes()).toContain(className);
      });
    });
  });
});
