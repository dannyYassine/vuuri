import { shallowMount as vueShallowMount, mount as vueMount } from '@vue/test-utils'

export const shallowMount = function (component, options = {}) {
  return vueShallowMount(component, options);
}
export const mount = function (component, options = {}) {
  return vueMount(component, options);
}