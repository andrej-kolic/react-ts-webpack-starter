import { useState, useRef, useEffect } from 'react';

import { Status } from './types';
import { useTwit } from './hook';
import type { IntersectionStateParams } from './hook';
import './styles.css';

export type IntersectionStateProps = IntersectionStateParams;

//

export function Twit({ initialState }: IntersectionStateProps) {
  const [message, setMessage] = useState<string>('');
  const { state, post, reset } = useTwit({ initialState });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const status = state.status;

  const handleReset = () => {
    setMessage('');
    reset();
  };

  useEffect(() => {
    console.log('status:', status);
    if (status === Status.INPUT && inputRef.current) {
      inputRef.current.focus();
    }
  }, [state]);

  const postEnabled = status === Status.INPUT && message.length > 0;

  return (
    <div className="Twit__container">
      <div>
        <label>Message: </label>
        <input
          type="text"
          ref={inputRef}
          value={message}
          disabled={status != Status.INPUT}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        &nbsp;
        <button disabled={!postEnabled} onClick={() => post(message)}>
          Post
        </button>
      </div>
      {/*  */}
      {status === Status.SUCCESS && (
        <p style={{ color: 'green' }}>
          Success. <button onClick={handleReset}>Send another</button>
        </p>
      )}
      {status === Status.ERROR && (
        <p style={{ color: 'red' }}>
          Error: {state.error.message}&nbsp;
          <button onClick={() => post(message)}>Retry</button>
        </p>
      )}
      {status === Status.PENDING && (
        <p style={{ color: '#666' }}>Sending... </p>
      )}
      {status === Status.INPUT && (
        <p style={{ color: '#666' }}>Enter your message</p>
      )}
    </div>
  );
}
