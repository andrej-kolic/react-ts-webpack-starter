import { useReducer } from 'react';

import { reducer, TwitStatus } from './types';
import type { TwitState, TwitReducer } from './types';
import { usePostMessage } from './api';

export type IntersectionStateParams = {
  initialState?: TwitState;
};

export function useTwit({
  initialState = { status: TwitStatus.INPUT },
}: IntersectionStateParams) {
  const [state, dispatch] = useReducer<TwitReducer>(reducer, initialState);
  const twitStatus = state.status;

  const post = (message: string) => {
    dispatch({ status: TwitStatus.PENDING });

    void (async () => {
      try {
        const messageId = await usePostMessage(message);
        dispatch({
          status: TwitStatus.SUCCESS,
          result: { messageId },
        });
      } catch (error) {
        dispatch({
          status: TwitStatus.ERROR,
          message: message,
          error: error as Error,
        });
      }
    })();
  };

  const reset = () => dispatch({ status: TwitStatus.INPUT });

  const retry = () => {
    if (twitStatus !== TwitStatus.ERROR) return; // TODO: throw?
    post(state.message);
  };

  return {
    state,
    post,
    reset,
    retry,
  };
}
