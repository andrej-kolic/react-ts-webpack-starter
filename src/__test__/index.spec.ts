import { sayHi } from '../';

describe('test sayHi function', () => {
  it('should say hi', () => {
    expect(sayHi('AbC')).toBe('Hi, AbC!');
  });
});
