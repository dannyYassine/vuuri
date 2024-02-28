import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePageObject {
  constructor(protected page: Page) {}

  abstract getPath();

  getPort() {
    return '3000';
  }

  getHost() {
    return 'http://client';
  }

  getUrl() {
    return `${this.getHost()}:${this.getPort()}/#/e2e/${this.getPath()}`;
  }

  visit() {
    this.page.goto(`${this.getUrl()}`);
  }
}
