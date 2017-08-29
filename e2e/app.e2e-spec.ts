import { AppLoginPage } from './app.po';

describe('app-login App', () => {
  let page: AppLoginPage;

  beforeEach(() => {
    page = new AppLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
