import { TwitStatus } from './types';
import { Twit } from './Twit';

//

export function TwitContainer() {
  return (
    <div>
      <Twit />

      <h2>Other states</h2>
      <Twit initialState={{ status: TwitStatus.PENDING }} />
      <br />
      <Twit initialState={{ status: TwitStatus.SUCCESS }} />
      <br />
      <Twit
        initialState={{
          status: TwitStatus.ERROR,
          message: '',
          error: new Error('Network error!'),
        }}
      />
    </div>
  );
}
