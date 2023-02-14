/**
 * # HTTP Mock
 *
 * See: https://mswjs.io/docs/getting-started/mocks
 */

import { rest } from 'msw';
import type { GetPostsResponseData } from '~/api';
import { getEnvironmentVariables } from '~/definitions/environment';

const { API_URL } = getEnvironmentVariables();

export const handlers = [
  /**
   * Get posts
   */
  rest.get(`${API_URL}/posts`, (_request, response, context) => {
    return response.once(
      context.status(200),
      context.json<GetPostsResponseData>([
        { id: 1, title: 'post 1' },
        { id: 2, title: 'post 2' },
        { id: 3, title: 'post 3' },
      ]),
    );
  }),
];
