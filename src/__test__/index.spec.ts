import { sayHi } from '../';

describe('test sayHi function', () => {
  console.log(2); // TODO: remove

  it('should say hi', () => {
    expect(sayHi('AbC')).toBe('Hi, AbC!');
  });
});
