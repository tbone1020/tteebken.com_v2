import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

describe('HomeComponent', () => {
  let component: HomeComponent;

  describe('Component dependicies', () => {
    
    beforeEach(() => {
      component = new HomeComponent();
    });
    it ('Should exist', () => {
      expect(component).toBeDefined();
    })

    it ('Should have certificates component', () => {
      expect(CertificatesComponent).toBeDefined();
    });
    
    it ('Should have contact component', () => {
      expect(ContactComponent).toBeDefined();
    });
    
    it ('Should have about component', () => {
      expect(AboutComponent).toBeDefined();
    });
    
    it ('Should have hero component', () => {
      expect(HeroComponent).toBeDefined();
    });
    
    it ('Should have portfolio component', () => {
      expect(PortfolioComponent).toBeDefined();
    });
  });
});
