import { flushPromises } from '@vue/test-utils';
import { shallowMount as vueShallowMount, mount as vueMount } from '@vue/test-utils'

export const shallowMount = function (component, options = {}) {
  return vueShallowMount(component, options);
}
export const mount = function (component, options = {}) {
  return vueMount(component, options);
}

export const assert = (fn) => {
  return new Promise(async (resolve) => {
    const tryFn = async (resolve) => {
      await flushPromises();
      try {
        fn();
        resolve();
      } catch (err) {
        tryFn(resolve);
      }
    };

    tryFn(resolve);
  });
};
