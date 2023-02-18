import { useState } from 'react';

import { TwitStatus } from './types';
import type { TwitState } from './types';
import { usePostMessage } from './api';

export type IntersectionStateParams = {
  initialState?: TwitState;
};

export function useTwit({
  initialState = { status: TwitStatus.INPUT },
}: IntersectionStateParams) {
  const [state, setState] = useState<TwitState>(initialState);
  const twitStatus = state.status;

  const post = (message: string) => {
    if (twitStatus !== TwitStatus.INPUT && twitStatus !== TwitStatus.ERROR)
      return;

    setState({ status: TwitStatus.PENDING });
    void (async () => {
      try {
        const messageId = await usePostMessage(message);
        setState({
          status: TwitStatus.SUCCESS,
          result: { messageId },
        });
      } catch (error) {
        setState({
          status: TwitStatus.ERROR,
          message: message,
          error: error as Error,
        });
      }
    })();
  };

  const reset = () => {
    if (twitStatus === TwitStatus.PENDING) return;
    setState({ status: TwitStatus.INPUT });
  };

  const retry = () => {
    if (twitStatus !== TwitStatus.ERROR) return;
    post(state.message);
  };

  return {
    state,
    post,
    reset,
    retry,
  };
}
