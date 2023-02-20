import { supportedLanguagesCodes, supportedCurrenciesCodes } from '~/definitions/settings';
import { useSettingsState, useSettingsActions } from '~/hooks/settings';

export const SettingsPage = () => {
  const settings = useSettingsState();
  const actions = useSettingsActions();

  return (
    <div data-testid="page-settings">
      <h1>Settings</h1>

      <hr />

      <div>
        <label>Language </label>
        <select
          value={settings.languageCode}
          onChange={(event) => {
            actions.updateLanguageCode(event.target.value);
          }}
        >
          {supportedLanguagesCodes.map((languageCode) => (
            <option key={languageCode} value={languageCode}>
              {languageCode.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <div>
        <label>Currency </label>
        <select
          value={settings.currencyCode}
          onChange={(event) => {
            actions.updateCurrencyCode(event.target.value);
          }}
        >
          {supportedCurrenciesCodes.map((currencyCode) => (
            <option key={currencyCode}>{currencyCode}</option>
          ))}
        </select>
      </div>

      <hr />
    </div>
  );
};
