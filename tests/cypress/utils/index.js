export { wait } from './wait';

export const asyncWindow = () => {
  return new Promise((resolve) => {
    return cy.window().then(window => {
      console.log(window);
      resolve(window);
    })
  });
}

export const asyncGet = (promise) => {
  return new Promise((resolve) => {
    return promise.then(result => {
      resolve(result);
    });
  });
}