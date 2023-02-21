// T - status
// S - state

export type Status = string | number | symbol;

export interface State<T> {
  status: T;
}

export type TransitionMap<T extends Status> = Record<T, T[]>;

export type Transition<S> = (state: S, nextState: S) => S;

export const transition = <T extends Status, S extends State<T>>(
  transitionMap: TransitionMap<T>,
  state: S,
  nextState: S,
  options: { shouldThrow: boolean } = { shouldThrow: true },
) => {
  // transition executed with same status (in effect or to update state) - return next state?
  if (state.status === nextState.status) return nextState;

  const nextStatusAllowed = transitionMap[state.status].find((s) => s === nextState.status);
  console.debug('next status:', nextStatusAllowed);

  if (!nextStatusAllowed) {
    const errorMessage = `invalid transition from '${String(state.status)}' to ' ${String(
      nextState.status,
    )}'`;

    if (options.shouldThrow) {
      throw new Error(errorMessage);
    } else {
      console.warn(errorMessage);
      return state;
    }
  }

  return nextState;
};
