import { TwitStatus } from './reducer';
import { useTwit } from './hook';
import type { IntersectionStateParams } from './hook';
import { PostMessage } from './PostMessage';

import './styles.css';

export type IntersectionStateProps = IntersectionStateParams;

/**
 * Twit component
 * @param initialState
 * @returns
 */
export function Twit({ initialState }: IntersectionStateProps) {
  const { state, post, reset, retry } = useTwit({ initialState });
  const twitStatus = state.status;

  return (
    <div className="Twit__container">
      <PostMessage
        isInInputMode={twitStatus === TwitStatus.INPUT}
        onPost={post}
      />
      {twitStatus === TwitStatus.SUCCESS && (
        <p style={{ color: 'green' }}>
          Success. <button onClick={reset}>Send another</button>
        </p>
      )}
      {twitStatus === TwitStatus.ERROR && (
        <p style={{ color: 'red' }}>
          Error: {state.error.message}&nbsp;
          <button onClick={retry}>Retry</button>
        </p>
      )}
      {twitStatus === TwitStatus.PENDING && (
        <p style={{ color: '#666' }}>Sending... </p>
      )}
      {twitStatus === TwitStatus.INPUT && (
        <p style={{ color: '#666' }}>Enter your message</p>
      )}
    </div>
  );
}
