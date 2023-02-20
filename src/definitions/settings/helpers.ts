/**
 * List of languages codes which are supported by the platform (frontend) for e.g. translations.
 */
export const supportedLanguagesCodes: readonly string[] = ['en', 'de'];
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- availability ensured
export const fallbackLanguageCode = supportedLanguagesCodes[0]!; // 'en'

/**
 * Retrieve a supported language code based on the provided one.
 *
 * @param [languageCode] -
 */
export function getSupportedLanguageCode(languageCode?: string) {
  if (languageCode) {
    if (supportedLanguagesCodes.includes(languageCode)) {
      return languageCode;
    }

    console.warn(`Unsupported language code detected: "${languageCode}"`);
  } else {
    console.warn('Missing language code detected');
  }

  return fallbackLanguageCode;
}

/**
 * List of currencies codes which are supported by the platform (frontend/backend) for e.g. pricing.
 */
export const supportedCurrenciesCodes: readonly string[] = ['EUR', 'USD'];
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- availability ensured
export const fallbackCurrencyCode = supportedCurrenciesCodes[0]!; // 'EUR'

/**
 * Retrieve a supported currency code based on the provided one.
 *
 * @param [currencyCode] -
 */
export function getSupportedCurrencyCode(currencyCode?: string) {
  if (currencyCode) {
    if (supportedCurrenciesCodes.includes(currencyCode)) {
      return currencyCode;
    }

    console.warn(`Unsupported currency code detected: "${currencyCode}"`);
  } else {
    console.warn('Missing currency code detected');
  }

  return fallbackCurrencyCode;
}

/**
 * Retrieve a localization identifier based on different subtags (= IETF BCP 47 language tag).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 *      https://en.wikipedia.org/wiki/IETF_language_tag
 *
 * @param languageCode -
 * @param [regionCode] -
 */
export function getLocale(languageCode: string, regionCode?: string) {
  const subtags: string[] = [languageCode];

  if (regionCode) {
    subtags.push(regionCode);
  }

  return subtags.join('-');
}
