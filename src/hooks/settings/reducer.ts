import type { Dispatch } from 'react';
import type { ImmerReducer } from 'use-immer';

import type { FSAction } from '~/types';
import type { Settings } from '~/definitions/settings';
import { getSupportedLanguageCode, getSupportedCurrencyCode } from '~/definitions/settings';

/**
 * Initial state values with fallback defaults.
 *
 * @param customSettings -
 */
export function settingsInitializer(customSettings: Partial<Settings>): Settings {
  const defaultBrowserLocale = window.navigator.language; // system
  const [defaultBrowserLanguageCode, defaultBrowserRegionCode] = defaultBrowserLocale.split('-');

  const languageCode = customSettings.languageCode || defaultBrowserLanguageCode;
  const regionCode = customSettings.regionCode || defaultBrowserRegionCode;

  return {
    languageCode: getSupportedLanguageCode(languageCode),
    regionCode,
    currencyCode: getSupportedCurrencyCode(customSettings.currencyCode),
  };
}

/**
 * Action type values for settings.
 */
enum SETTINGS_ACTION_TYPE {
  'UPDATE_LANGUAGE_CODE' = 'UPDATE_LANGUAGE_CODE',
  'UPDATE_REGION_CODE' = 'UPDATE_REGION_CODE',
  'UPDATE_CURRENCY_CODE' = 'UPDATE_CURRENCY_CODE',
}

/**
 * Actions structure definitions for settings.
 */
export type SettingsAction =
  | FSAction<SETTINGS_ACTION_TYPE.UPDATE_LANGUAGE_CODE, Settings['languageCode']>
  | FSAction<SETTINGS_ACTION_TYPE.UPDATE_REGION_CODE, Settings['regionCode']>
  | FSAction<SETTINGS_ACTION_TYPE.UPDATE_CURRENCY_CODE, Settings['currencyCode']>;

/**
 * Draft reducer handling state changes based on actions for settings.
 */
export const settingsReducer: ImmerReducer<Settings, SettingsAction> = (draft, action) => {
  switch (action.type) {
    case SETTINGS_ACTION_TYPE.UPDATE_LANGUAGE_CODE: {
      draft.languageCode = getSupportedLanguageCode(action.payload);
      break;
    }

    case SETTINGS_ACTION_TYPE.UPDATE_REGION_CODE: {
      draft.regionCode = action.payload;
      break;
    }

    case SETTINGS_ACTION_TYPE.UPDATE_CURRENCY_CODE: {
      draft.currencyCode = getSupportedCurrencyCode(action.payload);
      break;
    }
  }
};

/**
 * Actions logic definitions for settings.
 *
 * @param dispatch -
 */
export function createSettingsActions(dispatch: Dispatch<SettingsAction>) {
  return {
    /**
     *
     * @param languageCode -
     */
    updateLanguageCode(languageCode: Settings['languageCode']) {
      dispatch({
        type: SETTINGS_ACTION_TYPE.UPDATE_LANGUAGE_CODE,
        payload: languageCode,
      });
    },
    /**
     *
     *
     * @param regionCode -
     */
    updateRegionCode(regionCode: Settings['regionCode']) {
      dispatch({
        type: SETTINGS_ACTION_TYPE.UPDATE_REGION_CODE,
        payload: regionCode,
      });
    },
    /**
     *
     *
     * @param currencyCode -
     */
    updateCurrencyCode(currencyCode: Settings['currencyCode']) {
      dispatch({
        type: SETTINGS_ACTION_TYPE.UPDATE_CURRENCY_CODE,
        payload: currencyCode,
      });
    },
  };
}
