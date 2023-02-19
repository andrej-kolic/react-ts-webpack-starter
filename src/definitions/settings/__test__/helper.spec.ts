import {
  ensureSupportedLanguageCode,
  ensureSupportedCurrencyCode,
  getLocale,
} from '../helpers';

describe('ensureSupportedLanguageCode', () => {
  it('should return a valid supported language code', () => {
    expect(ensureSupportedLanguageCode('en')).toBe('en');
    expect(ensureSupportedLanguageCode('de')).toBe('de');
  });

  it('should return a valid fallback language code if the provided one is not supported', () => {
    // prevent verbose message of unsupported or missing value detected
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    expect(ensureSupportedLanguageCode('fr')).toBe('en');
    expect(ensureSupportedLanguageCode()).toBe('en');
  });
});

describe('ensureSupportedCurrencyCode', () => {
  it('should return a valid supported currency code', () => {
    expect(ensureSupportedCurrencyCode('EUR')).toBe('EUR');
    expect(ensureSupportedCurrencyCode('USD')).toBe('USD');
  });

  it('should return a valid fallback currency code if the provided one is not supported', () => {
    // prevent verbose message of unsupported or missing value detected
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    expect(ensureSupportedCurrencyCode('GBP')).toBe('EUR');
    expect(ensureSupportedCurrencyCode()).toBe('EUR');
  });
});

describe('getLocale', () => {
  it('should return a valid locale', () => {
    expect(getLocale('en')).toBe('en');
    expect(getLocale('de', 'DE')).toBe('de-DE');
  });
});
