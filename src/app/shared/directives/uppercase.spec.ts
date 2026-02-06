import { Uppercase } from './uppercase';

describe('TransformeUppercase', () => {
  it('should create an instance', () => {
    const directive = new Uppercase();
    expect(directive).toBeTruthy();
  });
});
