import { useState } from 'react';

import { Status } from './types';
import type { State } from './types';
import { usePostMessage } from './api';

export type IntersectionStateParams = {
  initialState?: State;
};

export function useTwit({
  initialState = { status: Status.INPUT },
}: IntersectionStateParams) {
  const [state, setState] = useState<State>(initialState);

  const post = (message: string) => {
    if (state.status !== Status.INPUT && state.status !== Status.ERROR) return;

    setState({ status: Status.PENDING });
    void (async () => {
      try {
        const result = await usePostMessage(message);
        setState({
          status: Status.SUCCESS,
          result: { message: result },
        });
      } catch (error) {
        setState({
          status: Status.ERROR,
          error: error as Error,
        });
      }
    })();
  };

  const reset = () => {
    if (state.status === Status.PENDING) return;
    setState({ status: Status.INPUT });
  };

  return {
    state,
    post,
    reset,
  };
}
