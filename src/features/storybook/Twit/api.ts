import { sleep } from '~/utilities/timer';

let requestCounter = 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function usePostMessage(message: string) {
  console.log('sending message:', message);

  requestCounter += 1;
  await sleep(1000);

  if (requestCounter % 2 !== 0) {
    // success
    console.info('message sent. messageId:', requestCounter);
    return requestCounter;
  } else {
    // error
    const error = new Error('Network error');
    console.error('error while sending message:', error.message);
    throw error;
  }
}
