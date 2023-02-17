import { Status } from './types';
import { Twit } from './Twit';

//

export function TwitContainer() {
  return (
    <div>
      <Twit />

      <h2>Other states</h2>
      <Twit initialState={{ status: Status.PENDING }} />
      <br />
      <Twit initialState={{ status: Status.SUCCESS }} />
      <br />
      <Twit
        initialState={{
          status: Status.ERROR,
          error: new Error('Network error!'),
        }}
      />
    </div>
  );
}
