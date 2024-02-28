import { expect, Locator, Page } from '@playwright/test';

export class BasePageObject {
  constructor(protected page: Page) {}

  getPort() {
    return '3000';
  }

  getHost() {
    return 'http://client';
  }

  getUrl() {
    return `${this.getHost()}:${this.getPort()}/#/e2e/${this.getPath()}`;
  }

  /**
   * @abstract
   */
  getPath() {}

  // goTo(appPath: string): Promise<null | Response> {
  //   return this.page.goto(`${process.env.CLIENT_URL}/${appPath}`);
  // }

  visit() {
    this.page.goto(`${this.getUrl()}`);
  }
}
