import { mount } from './main';

jest.mock('muuri');

import { isEmpty } from 'lodash';
import vuuri from "../../client/src/vuuri";
import {GridEvent} from "../../src";

describe("CRUD Operations", () => {
  
  let wrapper;
  
  beforeEach(() => {
  });
  
  describe('Adding', () => {
    test('should add all muuri events', async () => {
      const todoItems = [];
      wrapper = mount(vuuri, {
        propsData: {
          items: todoItems
        }
      });
      
      expect(wrapper.vm.events).toBeDefined();
      Object.values(GridEvent).forEach(event => {
        expect(this.events[event]).toEqual(event);
      });
    });
    
    test('should remove muuri events on destroy', async () => {
      const todoItems = [];
      wrapper = mount(vuuri, {
        propsData: {
          items: todoItems
        }
      });
      
      expect(isEmpty(wrapper.vm.events)).toBe(true);
    });
  });
  
});
