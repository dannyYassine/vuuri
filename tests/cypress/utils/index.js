export { wait } from './wait';

export const asyncGet = (promise) => {
  return new Promise((resolve) => {
    return promise.then(result => {
      resolve(result);
    });
  });
}