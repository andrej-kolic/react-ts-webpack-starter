// T - status
// S - state

export type Status = string | number | symbol;

export interface State<T> {
  status: T;
}

export type TransitionMap<T extends Status> = Record<T, T[]>;

export type Transition<S> = (state: S, nextState: S) => S;

export const transition = <T extends Status, S extends State<T>>(
  transitions: TransitionMap<T>,
  state: S,
  nextState: S,
) => {
  const nextStatus = transitions[state.status].find(
    (s) => s === nextState.status,
  );
  console.debug('next status:', nextStatus);

  if (!nextStatus)
    throw new Error(
      `invalid transition from '${String(state.status)}' to ' ${String(
        nextState.status,
      )}`,
    );

  return nextState;
};
