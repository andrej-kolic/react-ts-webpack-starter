/**
 *
 */
export type Settings = {
  /**
   * Identifier of a language
   */
  readonly languageCode: string;
  /**
   * Identifier of a region (= IANA region subtag)
   *
   * See: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
   */
  readonly regionCode?: string;
  /**
   * Identifier of a currency (decoupled from its symbol representation)
   *
   * See: https://en.wikipedia.org/wiki/ISO_4217
   */
  readonly currencyCode: string;
};
