import { rest } from 'msw';
import { screen } from '@testing-library/react';

import { getEnvironmentVariables } from '~/definitions/environment';
import { server } from '~/../test/unit+integration/setup';
import { renderInApp } from '~/../test/unit+integration/custom';
import { PostList } from '..';
import type { GetPostsResponseData } from '~/api';

const { API_URL } = getEnvironmentVariables();
const url = `${API_URL}/posts`;

describe('PostList', () => {
  it('should render', () => {
    server.use(
      rest.get(url, (_request, response, context) => {
        return response.once(
          context.status(200),
          context.json<GetPostsResponseData>([]),
        );
      }),
    );

    renderInApp(<PostList />);
    expect(screen.getByText(/posts/i, { selector: 'h3' })).toBeInTheDocument();
  });

  it('should render loading state', () => {
    server.use(
      rest.get(url, (_request, response, context) => {
        return response.once(
          context.status(200),
          context.json<GetPostsResponseData>([]),
        );
      }),
    );

    renderInApp(<PostList />);
    expect(
      screen.getByText(/status: loading, isLoading: true/i),
    ).toBeInTheDocument();
    // screen.debug();
  });

  it('should render posts', async () => {
    // use default mock

    renderInApp(<PostList />);
    expect(
      await screen.findByText(/status: success, isLoading: false, results: 3/i),
    ).toBeInTheDocument();
    expect(screen.getByText('post 1')).toBeInTheDocument();
    expect(screen.getByText('post 2')).toBeInTheDocument();
    expect(screen.getByText('post 3')).toBeInTheDocument();
    // screen.debug();
  });

  it('should render error', async () => {
    server.use(
      rest.get(url, (_request, response, context) => {
        return response.once(context.status(500));
      }),
    );

    renderInApp(<PostList />);
    expect(await screen.findByText(/error:/i)).toBeInTheDocument();
    // screen.debug();
  });
});
