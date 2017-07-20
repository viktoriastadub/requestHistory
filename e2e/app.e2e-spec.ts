import { SearchHistoryPage } from './app.po';

describe('search-history App', () => {
  let page: SearchHistoryPage;

  beforeEach(() => {
    page = new SearchHistoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
