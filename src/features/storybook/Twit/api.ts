import { sleep } from '~/utilities/timer';

let requestCounter = 1;

/**
 * Fake api method for posting a message
 * @param message message to be posted
 * @returns message id
 * @throws Error
 */
export async function usePostMessage(message: string) {
  console.log('sending message:', message);

  requestCounter += 1;
  await sleep(1000);

  if (requestCounter % 3 !== 0) {
    // success
    console.info('message sent. messageId:', requestCounter - 1);
    return requestCounter - 1;
  } else {
    // error
    const error = new Error('Network error');
    console.error('error while sending message:', error.message);
    throw error;
  }
}
