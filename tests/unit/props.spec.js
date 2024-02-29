import { describe, test, expect, vi, MockInstance, beforeEach } from 'vitest';
import vuuri from '@/Vuuri.vue';
import GridStore from '../../src/GridStore.js';
import { assert, mount } from '@test/utils';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('Props', () => {
  beforeEach(() =>{
    GridStore.clear();
  });

  describe('prop className', () => {
    test('should add className to vuuri container', async () => {
      const className = 'my-something-class';
      const wrapper = mount(vuuri, {
        props: {
          className
        }
      });

      const grid = wrapper.find('> div.muuri-grid');

      await assert(() => {
        expect(grid.classes()).toContain(className);
      });
    });
  });

  describe('prop modelValue', () => {
    test('should set model values to store', async () => {
      const setItemsForGridIdSpy =vi.spyOn(GridStore, 'setItemsForGridId');
      const modelValue = [];
      const wrapper = mount(vuuri, {
        props: {
          modelValue
        }
      });

      await assert(() => {
        expect(setItemsForGridIdSpy).toHaveBeenCalledWith(wrapper.vm.gridKey, modelValue);
      });
    });
  });

  describe('prop options', () => {
    test('should add options to muuriOptions', async () => {
      const options = {};
      const wrapper = mount(vuuri, {
        props: {
          options: {
            items: '.items'
          }
        }
      });

      await assert(() => {
        expect(wrapper.vm.muuriOptions).toMatchObject(options);
      });
    });
  });

  describe('prop getItemWidth', () => {
    test('should be called to add width on muuri item', async () => {
      const width = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          getItemWidth: () => width
        }
      });

      await assert(() => {
        expect(wrapper.find('[test-id="muuri-grid-item"]').attributes('style')).toContain(`width: ${width};`);
      });
    });
  });

  describe('prop groupId', () => {
    test('should add groupid and muuri to store', async () => {
      const groupId = "group-1";
      const addGridSpy = vi.spyOn(GridStore, 'addGrid');

      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          groupId
        }
      });

      await assert(() => {
        expect(addGridSpy).toHaveBeenCalledWith(groupId, wrapper.vm.muuri);
      });
    });

    test('should return muuri object based on groupId when dragSort in called', async () => {
      const groupId = "group-1";

      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          groupId
        }
      });

      await assert(() => {
        const ids = wrapper.vm.muuriOptions.dragSort();

        expect(ids.length).toEqual(1);
        expect(ids[0]).toEqual(wrapper.vm.muuri);
      });
    });
  });

  describe('prop groupIds', () => {
    test('should add groupids and muuri to store', async () => {
      const groupIds = ["group-1", 'group-2'];
      const addGridSpy = vi.spyOn(GridStore, 'addGrid');
      const addGridToGroupsSpy = vi.spyOn(GridStore, 'addGridToGroups');

      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          groupIds
        }
      });

      await assert(() => {
        expect(addGridToGroupsSpy).toHaveBeenCalledWith(groupIds, wrapper.vm.muuri);
        expect(addGridSpy).toHaveBeenCalledWith(groupIds[0], wrapper.vm.muuri);
        expect(addGridSpy).toHaveBeenCalledWith(groupIds[1], wrapper.vm.muuri);
      });
    });

    test('should return muuri objects based on groupIds when dragSort in called', async () => {
      const groupIds = ["group-1", 'group-2'];

      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          groupIds
        }
      });

      await assert(() => {
        const ids = wrapper.vm.muuriOptions.dragSort();

        expect(ids.length).toEqual(2);
        expect(ids[0]).toEqual(wrapper.vm.muuri);
        expect(ids[1]).toEqual(wrapper.vm.muuri);
      });
    });
  });

  describe('prop getItemHeight', () => {
    test('should be called to add width on muuri item', async () => {
      const height = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          getItemHeight: () => height
        }
      });

      await assert(() => {
        expect(wrapper.find('[test-id="muuri-grid-item"]').attributes('style')).toContain(`height: ${height};`);
      });
    });
  });

  describe('prop dragEnabled', () => {
    test('when true, should add draggable options to muuri options', async () => {
      const height = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          dragEnabled: true
        }
      });

      await assert(() => {
        expect(wrapper.vm.muuriOptions).toMatchObject({
          dragEnabled: true,
          dragRelease: {
            duration: 400,
            easing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
            useDragContainer: true,
          },
          dragPlaceholder: {
            enabled: true
          },
          dragAutoScroll: {
              sortDuringScroll: false,
              syncAfterScroll: false,
          },
        });
        
        expect(wrapper.vm.muuriOptions.dragEnabled).toBeDefined();
        expect(wrapper.vm.muuriOptions.dragContainer).toBeDefined();
        expect(wrapper.vm.muuriOptions.dragPlaceholder.createElement).toBeDefined();
        expect(wrapper.vm.muuriOptions.dragAutoScroll.targets).toBeDefined();
      });
    });

    test('when false, should not add draggable options to muuri options', async () => {
      const height = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          dragEnabled: false
        }
      });

      await assert(() => {
        expect(wrapper.vm.muuriOptions.dragEnabled).toBeFalsy();
        expect(wrapper.vm.muuriOptions.dragRelease).toBeFalsy();
        expect(wrapper.vm.muuriOptions.dragPlaceholder).toBeFalsy();
        expect(wrapper.vm.muuriOptions.dragAutoScroll).toBeFalsy();
      });
    });
  });
});
