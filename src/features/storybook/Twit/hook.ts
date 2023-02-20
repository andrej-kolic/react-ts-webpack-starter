import { useReducer } from 'react';

import { reducer, TwitStatus } from './reducer';
import type { TwitState, TwitReducer } from './reducer';
import { usePostMessage } from './api';

export type TwitParams = {
  initialState?: TwitState;
};

//

function useTwitTransition({
  initialState = { status: TwitStatus.INPUT },
}: TwitParams) {
  const [state, dispatch] = useReducer<TwitReducer>(reducer, initialState);

  return {
    state,

    toInput: () => dispatch({ status: TwitStatus.INPUT }),

    toPending: () => dispatch({ status: TwitStatus.PENDING }),

    toSuccess: (messageId: number) =>
      dispatch({
        status: TwitStatus.SUCCESS,
        result: { messageId },
      }),

    toError: (message: string, error: Error) =>
      dispatch({
        status: TwitStatus.ERROR,
        message: message,
        error: error,
      }),
  };
}

//

export function useTwit({ initialState }: TwitParams) {
  const { state, toInput, toPending, toSuccess, toError } = useTwitTransition({
    initialState,
  });

  const post = (message: string) => {
    toPending();
    void (async () => {
      try {
        const messageId = await usePostMessage(message);
        toSuccess(messageId);
      } catch (error) {
        toError(message, error as Error);
      }
    })();
  };

  const reset = toInput();

  const retry = () => {
    if (state.status !== TwitStatus.ERROR) return; // TODO: throw?
    post(state.message);
  };

  return { state, post, reset, retry };
}
