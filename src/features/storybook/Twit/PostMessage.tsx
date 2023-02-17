import { useState, useRef, useEffect } from 'react';
import type { State } from './types';
import { Status } from './types';

export type MessageProps = {
  state: State;
  onPost: (message: string) => void;
};

export function PostMessage({ state, onPost }: MessageProps) {
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const twitStatus = state.status;
  const postEnabled = twitStatus === Status.INPUT && message.length > 0;

  useEffect(() => {
    console.debug('status:', state.status);
    if (twitStatus === Status.INPUT) {
      setMessage('');
      inputRef.current && inputRef.current.focus();
    }
  }, [state]);

  return (
    <form>
      <label>Message: </label>
      <input
        type="text"
        ref={inputRef}
        value={message}
        disabled={twitStatus != Status.INPUT}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      &nbsp;
      <button disabled={!postEnabled} onClick={() => onPost(message)}>
        Post
      </button>
    </form>
  );
}
