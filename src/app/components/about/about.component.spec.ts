import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  
  beforeEach(() => {
    component = new AboutComponent();
  });

  it ('Should exist', () => {
    expect(component).toBeDefined();
  });
});
