import { transition } from '~/definitions/transition';
import type { Transition, TransitionMap } from '~/definitions/transition';

export enum TwitStatus {
  INPUT = 'input',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}
// export type TwitStatus2 = 'input' | 'pending' | 'success' | 'error';

export type TwitState =
  | { status: TwitStatus.INPUT }
  | { status: TwitStatus.PENDING }
  | { status: TwitStatus.SUCCESS; result?: { messageId: number } }
  | { status: TwitStatus.ERROR; message: string; error: Error };

const twitTransitionMap: TransitionMap<TwitStatus> = {
  [TwitStatus.INPUT]: [TwitStatus.PENDING],
  [TwitStatus.PENDING]: [TwitStatus.SUCCESS, TwitStatus.ERROR],
  [TwitStatus.SUCCESS]: [TwitStatus.INPUT],
  [TwitStatus.ERROR]: [TwitStatus.PENDING],
};

export type TwitReducer = Transition<TwitState>;

export const reducer: TwitReducer = (state, nextState) =>
  transition(twitTransitionMap, state, nextState);
