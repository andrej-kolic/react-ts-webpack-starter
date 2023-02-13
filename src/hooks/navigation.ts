import { useMemo } from 'react';
import axios from 'axios';
import { getEnvironmentVariables } from '~/definitions/environment';

export function useApiClient() {
  // const { getAccessTokenSilently } = useApiAuth0();
  const { API_URL } = getEnvironmentVariables();

  return useMemo(() => {
    const axiosClient = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosClient.interceptors.request.use((config) => {
      // const accessToken = await getAccessTokenSilently(options);
      console.log('* axios interceptor:', config);
      config.headers['Authorization'] = 'Bearer 123';

      return config;
    });

    // TODO: define API client
    return axiosClient;
  }, []);
}
