import { CertificatesComponent } from './certificates.component';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  
  beforeEach (() => {
    component = new CertificatesComponent();
  });

  it ('Should exist', () => {
    expect(component).toBeDefined();
  });

  describe ('Certificate list', () => {
    it ('Should have certificate array list', () => {
      expect(component.certificateList).toBeDefined();
    });
  
    it ('Should be an array', () => {
      expect(Array.isArray(component.certificateList)).toBe(true);
    });
  
    it ('Should be a list of objects', () => {
      expect(component.certificateList[0] instanceof Object).toBe(true);
      expect(component.certificateList[0] === null).toBe(false);
      expect(Array.isArray(component.certificateList[0])).toBe(false);
    });
  });

});
