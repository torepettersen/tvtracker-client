import { TvTrackerPage } from './app.po';

describe('tv-tracker App', function() {
  let page: TvTrackerPage;

  beforeEach(() => {
    page = new TvTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
