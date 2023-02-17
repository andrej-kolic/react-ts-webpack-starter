export enum Status {
  INPUT = 'input',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type State =
  | { status: Status.INPUT }
  | { status: Status.PENDING }
  | { status: Status.SUCCESS; result?: { message: string } }
  | { status: Status.ERROR; error: Error };
