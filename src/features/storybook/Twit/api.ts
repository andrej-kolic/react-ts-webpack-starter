import { sleep } from '~/utilities/timer';

let requestCounter = 0;

export async function usePostMessage(message: string) {
  requestCounter += 1;
  await sleep(1000);
  if (requestCounter % 2 !== 0) {
    return message;
  } else {
    throw new Error('Network error');
  }
}
