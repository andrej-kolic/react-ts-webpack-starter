import type { ReactElement, FunctionComponent, Dispatch } from 'react';
import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import type { Settings } from '~/definitions/settings';
import type { SettingsAction } from './reducer';
import {
  settingsReducer,
  settingsInitializer,
  createSettingsActions,
} from './reducer';

/**
 *
 */
const SettingsStateContext = createContext<Settings | null>(null);

/**
 *
 */
const SettingsDispatchContext = createContext<Dispatch<SettingsAction> | null>(
  null,
);

/**
 *
 */
export type SettingsProviderProps = {
  /**
   *
   */
  settings?: Partial<Settings>;
  /**
   *
   */
  children: ReactElement;
};

/**
 * Integrate settings.
 */
export const SettingsProvider: FunctionComponent<SettingsProviderProps> = ({
  settings: customSettings = {},
  children,
}) => {
  const [state, dispatch] = useImmerReducer<
    Settings,
    SettingsAction,
    Partial<Settings>
  >(settingsReducer, customSettings, settingsInitializer);

  return (
    <SettingsStateContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsStateContext.Provider>
  );
};

/**
 * Access settings.
 */
export function useSettingsState() {
  const settingsState = useContext(SettingsStateContext);

  if (!settingsState) {
    throw new Error(
      '"useSettingsContext" must be used within a "SettingsProvider"',
    );
  }

  return settingsState;
}

/**
 * Interact with settings.
 */
export function useSettingsActions() {
  const settingsDispatch = useContext(SettingsDispatchContext);

  if (!settingsDispatch) {
    throw new Error(
      '"useSettingsActions" must be used within a "SettingsProvider"',
    );
  }

  return createSettingsActions(settingsDispatch);
}
