export enum Status {
  INPUT = 'input',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type State =
  | { status: Status.INPUT }
  | { status: Status.PENDING }
  | { status: Status.SUCCESS; result?: { messageId: number } }
  | { status: Status.ERROR; message: string; error: Error };
