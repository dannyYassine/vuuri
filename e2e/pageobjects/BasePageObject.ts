import { expect, Locator, Page } from '@playwright/test';

export class BasePageObject {

    constructor(protected page: Page) {

    }

    getPort() {
      return '9999'
    }
    
    getHost() {
      return 'http://localhost'
    }
    
    getUrl() {
      return `${this.getHost()}:${this.getPort()}/e2e/${this.getPath()}`
    }
    
    /**
     * @abstract
     */
    getPath() {
    
    }

    goTo(appPath: string): Promise<null | Response> {
      return this.page.goto(`${process.env.CLIENT_URL}/${appPath}`);
    }
    
    visit() {
      cy.visit(`${process.env('PW_CLIENT_URL') || this.getUrl()}`);
    }
  }