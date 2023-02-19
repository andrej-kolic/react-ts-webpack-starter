import { useState, useRef, useEffect } from 'react';
import type { TwitState } from './reducer';
import { TwitStatus } from './reducer';

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
  const postEnabled = isInInputMode && message.length > 0;

  useEffect(() => {
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
      />
      &nbsp;
      <button disabled={!postEnabled} onClick={() => onPost(message)}>
        Post
      </button>
    </form>
  );
}
