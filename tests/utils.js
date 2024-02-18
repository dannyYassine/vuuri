import { flushPromises } from '@vue/test-utils';

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
