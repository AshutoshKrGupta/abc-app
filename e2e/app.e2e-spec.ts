import { NrouterPage } from './app.po';

describe('nrouter App', () => {
  let page: NrouterPage;

  beforeEach(() => {
    page = new NrouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
