import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent();
  })

  it ('Should have the current year', () => {
    let thisYear = new Date().getFullYear();
    expect(component.currentYear === thisYear).toBe(true);
  });
});
