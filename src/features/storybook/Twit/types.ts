/**
 * Possible flow statuses
 */
export enum TwitStatus {
  INPUT = 'input',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

/**
 * Intersection type representing all possible states
 */
export type TwitState =
  | { status: TwitStatus.INPUT }
  | { status: TwitStatus.PENDING }
  | { status: TwitStatus.SUCCESS; result?: { messageId: number } }
  | { status: TwitStatus.ERROR; message: string; error: Error };

// TODO: generic type (Transition<T> = Record<T, T[]>)
const transitions: Record<TwitStatus, TwitStatus[]> = {
  [TwitStatus.INPUT]: [TwitStatus.PENDING],
  [TwitStatus.PENDING]: [TwitStatus.SUCCESS, TwitStatus.ERROR],
  [TwitStatus.SUCCESS]: [TwitStatus.INPUT],
  [TwitStatus.ERROR]: [TwitStatus.PENDING],
};

// TODO: make generic
// TODO: generic type (StateMachine: <S, T>(transitions<T>, state: S, nextState: S) => S)
export function reducer(state: TwitState, nextState: TwitState) {
  const nextStatus = transitions[state.status].find(
    (s) => s === nextState.status,
  );
  console.log('next status:', nextStatus);

  if (!nextStatus)
    throw new Error(
      `invalid transition from '${state.status}' to ' ${nextState.status}`,
    );

  return nextState;
}
