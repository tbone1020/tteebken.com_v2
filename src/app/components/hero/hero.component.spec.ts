import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;

  beforeEach (() => {
    component = new HeroComponent();
  })
  it ('Should exist', () => {
    expect(component).toBeDefined();
  })
  
});
