import { PersonaPage } from './app.po';

describe('persona App', function() {
  let page: PersonaPage;

  beforeEach(() => {
    page = new PersonaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
