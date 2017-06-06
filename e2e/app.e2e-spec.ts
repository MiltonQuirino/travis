import { TravisCiPage } from './app.po';

describe('travis-ci App', () => {
  let page: TravisCiPage;

  beforeEach(() => {
    page = new TravisCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
