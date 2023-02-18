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
