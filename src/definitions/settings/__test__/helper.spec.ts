import {
  getSupportedLanguageCode,
  getSupportedCurrencyCode,
  getLocale,
} from '../helpers';

describe('getSupportedLanguageCode', () => {
  it('should return a valid supported language code', () => {
    expect(getSupportedLanguageCode('en')).toBe('en');
    expect(getSupportedLanguageCode('de')).toBe('de');
  });

  it('should return a valid fallback language code if the provided one is not supported', () => {
    // prevent verbose message of unsupported or missing value detected
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    expect(getSupportedLanguageCode('fr')).toBe('en');
    expect(getSupportedLanguageCode()).toBe('en');
  });
});

describe('getSupportedCurrencyCode', () => {
  it('should return a valid supported currency code', () => {
    expect(getSupportedCurrencyCode('EUR')).toBe('EUR');
    expect(getSupportedCurrencyCode('USD')).toBe('USD');
  });

  it('should return a valid fallback currency code if the provided one is not supported', () => {
    // prevent verbose message of unsupported or missing value detected
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    expect(getSupportedCurrencyCode('GBP')).toBe('EUR');
    expect(getSupportedCurrencyCode()).toBe('EUR');
  });
});

describe('getLocale', () => {
  it('should return a valid locale', () => {
    expect(getLocale('en')).toBe('en');
    expect(getLocale('de', 'DE')).toBe('de-DE');
  });
});
