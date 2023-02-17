import { Status } from './types';
import { useTwit } from './hook';
import type { IntersectionStateParams } from './hook';
import { PostMessage } from './PostMessage';

import './styles.css';

export type IntersectionStateProps = IntersectionStateParams;

//

export function Twit({ initialState }: IntersectionStateProps) {
  const { state, post, reset, retry } = useTwit({ initialState });
  const twitStatus = state.status;

  return (
    <div className="Twit__container">
      <PostMessage state={state} onPost={post} />
      {/*  */}
      {twitStatus === Status.SUCCESS && (
        <p style={{ color: 'green' }}>
          Success. <button onClick={reset}>Send another</button>
        </p>
      )}
      {twitStatus === Status.ERROR && (
        <p style={{ color: 'red' }}>
          Error: {state.error.message}&nbsp;
          <button onClick={retry}>Retry</button>
        </p>
      )}
      {twitStatus === Status.PENDING && (
        <p style={{ color: '#666' }}>Sending... </p>
      )}
      {twitStatus === Status.INPUT && (
        <p style={{ color: '#666' }}>Enter your message</p>
      )}
    </div>
  );
}
