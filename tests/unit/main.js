import { createLocalVue, shallowMount as vueShallowMount, mount as vueMount } from '@vue/test-utils'

export const localVue = createLocalVue();

export const shallowMount = function (component, options = {}) {
  options.localVue = localVue;
  return vueShallowMount(component, options);
}
export const mount = function (component, options = {}) {
  options.localVue = localVue;
  return vueMount(component, options);
}