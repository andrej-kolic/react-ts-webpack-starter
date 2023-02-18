import { useState, useRef, useEffect } from 'react';
import type { TwitState } from './types';
import { TwitStatus } from './types';

export type MessageProps = {
  isInInputMode: boolean;
  onPost: (message: string) => void;
};

/**
 * Input and post message
 * @param state current state of
 * @param param0
 * @returns
 */

export function PostMessage({ isInInputMode, onPost }: MessageProps) {
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const twitStatus = state.status;
  // const postEnabled = twitStatus === TwitStatus.INPUT && message.length > 0;
  const postEnabled = isInInputMode && message.length > 0;

  useEffect(() => {
    // console.debug('status:', state.status);
    // if (twitStatus === TwitStatus.INPUT) {
    if (isInInputMode) {
      setMessage('');
      inputRef.current && inputRef.current.focus();
    }
  }, [isInInputMode]);

  return (
    <form>
      <label>Message: </label>
      <input
        type="text"
        ref={inputRef}
        value={message}
        disabled={!isInInputMode}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      &nbsp;
      <button disabled={!postEnabled} onClick={() => onPost(message)}>
        Post
      </button>
    </form>
  );
}
