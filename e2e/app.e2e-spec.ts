import { Ent1AngularPage } from './app.po';

describe('ent1-angular App', function() {
  let page: Ent1AngularPage;

  beforeEach(() => {
    page = new Ent1AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
