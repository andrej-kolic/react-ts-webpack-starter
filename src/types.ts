/**
 * Unwrap a promise recursively
 *
 * See: https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

/**
 * Flux Standard Action (FSA) - a common message interface for describing state changes in reducers.
 *
 * See: https://github.com/reduxjs/redux-toolkit/blob/master/src/createAction.ts#L21
 */
export type FSAction<T, P = void, M = unknown> = {
  type: T;
  payload: P;
  meta?: M;
  error?: boolean;
};
