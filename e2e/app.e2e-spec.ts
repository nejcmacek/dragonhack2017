import { Dragonhack2017Page } from './app.po';

describe('dragonhack2017 App', () => {
  let page: Dragonhack2017Page;

  beforeEach(() => {
    page = new Dragonhack2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
